const graphql = require('graphql');
const RoomType = require('./room_type');
const UserType = require('./user_type');
const AuthType = require('./auth_type');
const roomUtils = require('../resolvers/roomUtils');
const userUtils = require('../resolvers/userUtils');
const BookingType = require('./booking_type');
const bookingUtils = require('../resolvers/bookingUtils');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} = graphql;

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getUsers: {
            type: GraphQLList(UserType),
            resolve(parentValue, {args}, req) {
                return userUtils.getUsers(req)
            }
        },

        logIn: {
            type: AuthType,
            args: {
                email: {type: GraphQLNonNull(GraphQLString)},
                password: {type: GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, {email, password}, req) {
                return userUtils.logInUser(email, password, req)
            }
        },

        getRooms: {
            type: GraphQLList(RoomType),
            resolve(parentValue, {args}, req){
                return roomUtils.getRooms(req)
            }
        },

        getRoomById: {
            type: RoomType,
            args: {
                _id: {type: GraphQLString}
            },
            resolve(parentValue, {_id}, req){
                return roomUtils.getRoomById(_id, req)
            }
        },
        
        getBookings: {
            type: GraphQLList(BookingType),
            resolve(parentValue, {args}, req) {
                bookingUtils.getBookings(req)
            }
        },

        getBookingById: {
            type: BookingType,
            args: {
                _id : {type: GraphQLString}
            },
            resolve(parentValue, {_id}, req) {
                bookingUtils.getBookingById(_id, req)
            }
        }
    }
});



module.exports = RootQuery;