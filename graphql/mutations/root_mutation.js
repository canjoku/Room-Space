const graphql = require('graphql');
const RoomType = require('../query_types/room_type');
const UserType = require('../query_types/user_type');
const UserInputType = require('../input_types/user_input_type');
const RoomInputType = require('../input_types/room_input_type');
const userUtils = require('../resolvers/userUtils');
const roomUtils = require('../resolvers/roomUtils');
const bookingUtils = require('../resolvers/bookingUtils');
const BookingType = require('../query_types/booking_type');

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
                return userUtils.createUser(firstName, surname, email, department, password, req)
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
                return roomUtils.createRoom(roomSize, bookingStatus, roomNumber, roomLocation, req)
            }
        },

        deleteRoom: {
            type: RoomType,
            args: {
                id: {type: GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, {args}, req) {
                roomUtils.deleteRoom(req)
            }
        },
         makeBooking: {
             type: BookingType,
             args: {
                room: {type: GraphQLNonNull(RoomInputType)},
                user: {type: GraphQLNonNull(UserInputType)},
                date: {type: GraphQLNonNull(GraphQLString)},
                startTime: {type: GraphQLNonNull(GraphQLString)},
                endTime: {type: GraphQLNonNull(GraphQLString)}
             },
             resolve(parentValue, {room, user, date, startTime, endTime}, req) {
                 bookingUtils.makeBooking (room, user, date, startTime, endTime, req)
             }
         }, 

         cancelBooking: {
            type: BookingType,
            args: {
               id: {type: GraphQLNonNull(GraphQLString)}
            },
            resolve() {
                bookingUtils.cancelBooking
            }
         }
    }
})

module.exports = mutation;