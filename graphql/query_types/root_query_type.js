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
    GraphQLNonNull
} = graphql;

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        users: {
            type: UserType,
            args: {},
            resolve(parentValue, {args}, req) {
                return userUtils.getUsers(req)
            }
        },
        rooms: {
            type: RoomType,
            args: {},
            resolve(parentValue, {}, req){
                return roomUtils.getRooms(req)
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
        bookings: {
            type: BookingType,
            args:{},
            resolve(parentValue, {args}, req) {
                bookingUtils.getBookings(req)
            }
        }
    }
});



module.exports = RootQuery;