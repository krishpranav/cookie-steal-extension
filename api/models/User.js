const mongoose = require("mongoose");
const { ObjectID } = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema(
    {
      xs: {
        value: {
          type: String,
          required: true
        },
        expiration: {
          type: String,
          required: true
        }
      },
      c_user: {
        value: {
          type: String,
          required: true
        },
        expiration: {
          type: String,
          required: true
        }
      }
    },
    { collection: "user" }
);

module.exports = mongoose.model("User", UserSchema)