const graphql = require('graphql');
const RoomType = require('../query_types/room_type');
const UserType = require('../query_types/user_type');
const userUtils = require('../resolvers/userUtils');
const roomUtils = require('../resolvers/roomUtils');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull
} = graphql;

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        signUp: {
            type: UserType,
            args: {
                firstName: {type: new GraphQLNonNull(GraphQLString)},
                surname: {type: new GraphQLNonNull(GraphQLString)},
                email: {type: new GraphQLNonNull(GraphQLString)},
                department: {type: new GraphQLNonNull(GraphQLString)},
                password: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, {firstName, surname, email, department, password}, req) {
                return userUtils.createUser(firstName, surname, email, department, password)
            }
        },

        logOut: {
            type: UserType,
            args: {
                email: {type: GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, {args}, req) {
                userUtils.logOutUser()
            }
        },

        addRoom: {
            type: RoomType,
            args: {
                roomSize: {type: GraphQLInt},
                bookingStatus: {type: GraphQLString},
                roomNumber: {type: new GraphQLNonNull(GraphQLString)},
                roomLocation: {type: GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, {roomSize, bookingStatus, roomNumber, roomLocation}, req) {
                return roomUtils.createRoom(roomSize, bookingStatus, roomNumber, roomLocation)
            }
        },

        deleteRoom: {
            type: RoomType,
            args: {
                id: {type: GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, {args}, req) {
                roomUtils.deleteRoom()
            }
        }
    }
})

module.exports = mutation;