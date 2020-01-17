var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLBoolean = require('graphql').GraphQLBoolean;
var GraphQLDate = require('graphql-date');
var BoardModel = require('../models/Board');
var pureBoardModel = require("../models/pureBoard");

var boardType = new GraphQLObjectType({
  name: 'board',
  fields: function () {
    return {
      _id: { type: GraphQLString },

      title: { type: GraphQLString },

      backgroundImageUrl: { type: GraphQLString },  

      isTemplate: { type: GraphQLBoolean },

      templateType: { type: GraphQLString },

      visitedTime: { type: GraphQLDate },

      isStarred: { type: GraphQLBoolean },

      author: { type: GraphQLString },

      symbolIconUrl: { type: GraphQLString },

      brief: { type: GraphQLString },
      
      linkUrl: { type: GraphQLString },
    }
  }
});
var pureBoardType = new GraphQLObjectType({
  name: 'pureBoard',
  fields: function () {
    return {
      _id: { type: GraphQLString },

      title: { type: GraphQLString },

      backgroundImageUrl: { type: GraphQLString },  

      visitedTime: { type: GraphQLDate },

      isStarred: { type: GraphQLBoolean },

    }
  }
});

var queryType = new GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      pureBoards: {
        type: new GraphQLList(pureBoardType),

        resolve: function() {
          const pureBoards = pureBoardModel.find().exec()
          
          if (!pureBoards) {
            throw new Error('Error')
            return null;
          }
          return pureBoards
        }
      },
      recentBoards: {
        type: new GraphQLList(pureBoardType),

        resolve: function() {
          const recentBoards = pureBoardModel.find({
            isStarred: false,
            // limit: 3,
            // order: [['visitedTime', 'DESC']] 
          },(err,data)=>{
            if (err) {console.log(err)}

          }).sort({
            "visitedTime": "DESC"
          }).limit(3).exec()
          if (!recentBoards) {
            throw new Error('Error')
            return null;
          
          }
          return recentBoards
        }
      },

      boards: {
        type: new GraphQLList(boardType),
        resolve: function () {
          const boards = BoardModel.find().exec()
          if (!boards) {
            throw new Error('Error')
          }
          return boards
        }
      },
      board: {
        type: boardType,
        args: {
          id: {
            name: '_id',
            type: GraphQLString
          }
        },
        resolve: function (root, params) {
          const boardDetails = BoardModel.findById(params.id).exec()
          if (!boardDetails) {
            throw new Error('Error')
          }
          return boardDetails
        }
      }

    }
  }
});

var mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: function () {
    return {
      addStar: {
        type:pureBoardType,
        args: {
          id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
          },
          isStarred: {
            type: GraphQLNonNull(GraphQLBoolean) 
          }
        },
        
        resolve(root, params) {
          return pureBoardModel.findByIdAndUpdate(params.id, { isStarred: true }, function (err) {
            if (err) return next(err);
          });
        }
      },
    
      addBoard: {
        type: boardType,
        args: {
          backgroundImageUrl: {
            type: new GraphQLNonNull(GraphQLString)
          },
          title: {
            type: new GraphQLNonNull(GraphQLString)
          },
          author: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve: function (root, params) {
          const boardModel = new BoardModel(params);
          const newCard = boardModel.save();
          if (!newCard) {
            throw new Error('Error');
          }
          return newCard
        }
      },
      updateBoard: {
        type: boardType,
        args: {
          id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLString)
          },
          backgroundImageUrl: {
            type: new GraphQLNonNull(GraphQLString)
          },
          title: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve(root, params) {
          return BoardModel.findByIdAndUpdate(params.id, { backgroundImageUrl: params.backgroundImageUrl, title: params.title, author: params.author }, function (err) {
            if (err) return next(err);
          });
        }
      },
      removeBoard: {
        type: boardType,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve(root, params) {
          const remBoard = BoardModel.findByIdAndRemove(params.id).exec();
          if (!remBoard) {
            throw new Error('Error')
          }
          return remBoard;
        }
      }
    }
  }
});

module.exports = new GraphQLSchema({query: queryType, mutation: mutation});