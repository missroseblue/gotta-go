const { AuthenticationError } = require("apollo-server-express");
const { User, Post, Restroom } = require("../models");
// const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        users: async () => {
            const users = await User.find({})
                .select('-__v -password')
                .populate('posts');
            
                return users;
        }
    }
};

module.exports = resolvers;
