const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      // default: 'https://cdn-icons-png.flaticon.com/512/634/634012.png?w=740&t=st=1691641898~exp=1691642498~hmac=90bb1dc1d59e155155af3ea7b41941b3726bacb8b6d3ff65fb4e300083f6be32',
      // default:
      //   'https://cdn-icons-png.flaticon.com/512/44/44948.png?w=740&t=st=1691642092~exp=1691642692~hmac=3b0b0a46a76b84c65e69f77e8b14ee1acba6c06f22fe4fb8d4e38cc8355952e2',
      default:
        'https://w7.pngwing.com/pngs/858/581/png-transparent-profile-icon-user-computer-icons-system-chinese-wind-title-column-miscellaneous-service-logo.png',
    },
    role: {
      type: String,
      default: 'user',
    },
    gender: {
      type: String,
      default: 'male',
    },
    mobile: {
      type: String,
      default: '',
    },
    address: {
      type: String,
      default: '',
    },
    story: {
      type: String,
      default: '',
      maxlength: 200,
    },
    website: {
      type: String,
      default: '',
    },
    followers: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'user',
      },
    ],
    following: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('user', userSchema);
