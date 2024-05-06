// Imports
const { Schema, Types } = require("mongoose");

// This isn't a model, but instead will be used as the reaction fields sub-document schema in the Thought.js model
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Exports
module.exports = reactionSchema;