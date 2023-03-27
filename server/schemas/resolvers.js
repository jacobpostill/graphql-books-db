const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
  //   me: async (parent,{ user = null, params }) => {
  //     const foundUser = await User.findOne({
  //       $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
  //     });
  
  //     if (!foundUser) {
  //       throw new Error("Couldn't find user!"); 
  //     }
  
  //     return foundUser;
  //   },
  // },

  me: async (parent, args, context) => {
    if (context.user) {
      const user = await User.findOne({ _id: context.user._id });
    
      return user;
    }
    throw new AuthenticationError('You need to be logged in!');
  },
},

  Mutation: {
    addUser: async (parent, args, context) => {
     
      const user = await User.create(args);
  
      if (!user) {
        throw new Error('Something is wrong!');      }
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, body) => {
      console.log('inlogin');
      const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
      if (!user) {
        throw new AuthenticationError('Not found!');
      }
      const correctPw = await user.isCorrectPassword(body.password);
  
      if (!correctPw) {
        throw new AuthenticationError('Wrong Password!');
      }
      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, body, context) => {
      // get user from context instead?
      try {
        console.log('bookadd');
        console.log(context.user);
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: body } },
          { new: true, runValidators: true }
        );
   
        console.log(updatedUser);
        return updatedUser;
      } catch (err) {
        console.log(err);
        throw new Error('Something is wrong with the user!'); 
      }
    },
    removeBook: async (parent,  {bookId} , context) => {
      if (context.user) {
        console.log('inremove');
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId: bookId } } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
