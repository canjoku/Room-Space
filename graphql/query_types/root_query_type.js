const graphql = require('graphql');
const RoomType = require('./room_type');
const UserType = require('./user_type');
const AuthType = require('./auth_type');
const roomUtils = require('../resolvers/roomUtils');
const userUtils = require('../resolvers/userUtils');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} = graphql;

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        users: {
            type: UserType,
            args: {},
            resolve(parentValue, {args}, req) {
                return userUtils.getUsers()
            }
        },
        rooms: {
            type: RoomType,
            args: {},
            resolve(parentValue, {args}, req){
                return roomUtils.getRooms()
            }
        },
        logIn: {
            type: AuthType,
            args: {
                email: {type: GraphQLNonNull(GraphQLString)},
                password: {type: GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, {email, password}, req) {
                return userUtils.logInUser(email, password)
            }
        },
    }
});



module.exports = RootQuery;