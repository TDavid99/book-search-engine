const {AuthenticationError } = require ("apollo-server-express");
const {signToken} = require("../utils/auth");
const { User} = require("../models");

const resolvers = {
    Query: {
        me: async (_,args, context) => {
            if (context.user) {
                const userData = await User.findOne({ id: context.user._id })
                  .select("-__v -password")
                  .populate("savedBooks");
                return userData;
              }
              throw new AuthenticationError("You are not logged in!");
            },
          },
          Mutation: {
            // login 
            login: async (_, { email, password }) => {
              const user = await User.findOne({ email });
              // check to see if this is the correct user
              if (!user) {
                throw new AuthenticationError("This user is invalid");
              }
              const corrrectPassword = await User.isCorrectPassword(correctPW);
              //  the correct password
              if (!corrrectPassword) {
                throw new AuthenticationError("This password is incorrect");
              }
        
              // add the token 
              const token = signToken(user);
              return { token, user };
            },

       //new user 
       addUser: async (_, args) => {
        const user = await User.create(args);
        const token = signToken(user);

        return {token, user};
       },
       saveBook: async (_, {input}, context) => {
        if (context.user) {
            const bookMuForUser = await User.findOneAndUpdate(
                {_id: context.user._id },
                { $addToSet: {saveBook: input } },
                { new: true, runValidators: true }
            );
            return bookMuForUser;
        }
          throw new AuthenticationError("invaild login");
       },
        },
    };

    module.exports = resolvers;


    
    
