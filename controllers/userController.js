const Users = require('../models/userModels');

const userControllers = {
  searchUser: async (req, res) => {
    try {
      const users = await Users.find({
        username: { $regex: req.query.username },
      })
        .limit(10)
        .select('fullname username avatar');

      res.json({ users });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = userControllers;
