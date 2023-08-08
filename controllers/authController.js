const Users = require('../models/userModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authControllers = {
  register: async (req, res) => {
    try {
      const { fullname, username, email, password, gender } = req.body;
      let newUsername = username.toLowerCase().replace(/ /g, '');

      const user_name = await Users.findOne({ username: newUsername });
      if (user_name)
        return res.status(400).json({ msg: 'This user name already exists.' });

      const user_email = await Users.findOne({ email });
      if (user_email)
        return res.status(400).json({ msg: 'This email already exists.' });

      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: 'Password must be at least 6 characters long.' });

      const passwordHash = await bcrypt.hash(password, 12);

      const newUser = await new Users({
        fullname,
        username: newUsername,
        email,
        password: passwordHash,
        gender,
      });

      const access_token = createAccessToken({ id: newUser._id });
      const refresh_token = createRefreshToken({ id: newUser._id });

      res.cookie('refreshtoken', refresh_token, {
        httpOnly: true,
        path: '/api/refresh_token',
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });

      await newUser.save();

      res.status(201).json({
        msg: 'Registered Successfully!',
        access_token,
        user: { ...newUser._doc, password: '' },
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await Users.findOne({ email }).populate(
        'followers following',
        '-password',
      );
      if (!user)
        return res.status(400).json({ msg: 'This email does not exist.' });

      const comparePassword = await bcrypt.compare(password, user.password);
      if (!comparePassword)
        return res.status(400).json({ msg: 'This password is incorrect.' });

      const access_token = createAccessToken({ id: user._id });
      const refresh_token = createRefreshToken({ id: user._id });

      res.cookie('refreshtoken', refresh_token, {
        httpOnly: true,
        path: '/api/refresh_token',
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });

      res.status(200).json({
        msg: 'Login Successfully!',
        access_token,
        user: { ...user._doc, password: '' },
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie('refreshtoken', { path: '/api/refresh_token' });
      return res.status(200).json({ msg: 'Logged out successfully.' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    }
  },
  generateAccessToken: async (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token) return res.status(400).json({ msg: 'Please login now.' });

      jwt.verify(
        rf_token,
        process.env.REFRESH_TOKEN_SECRET,
        async (err, result) => {
          if (err) return res.status(400).json({ msg: 'Please login now.' });

          const user = await Users.findById(result.id)
            .select('-password')
            .populate('followers following', '-password');

          if (!user)
            return res.status(400).json({ msg: 'This user does not exist.' });

          const access_token = createAccessToken({ id: result.id });

          res.status(200).json({ access_token, user });
        },
      );
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    }
  },
};

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '1d',
  });
};
const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '30d',
  });
};

module.exports = authControllers;
