const graphql = require('graphql');
const BookingType = require('../types/booking_type');
const RoomType = require('../types/room_type');
const UserType = require('../types/user_type');
const RoomInputType = require('./user_input_type');
const UserInputType = require('./room_input_type');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} = graphql;

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addUser: {
            type: UserType,
            args: {
                firstName: {type: new GraphQLNonNull(GraphQLString)},
                surname: {type: new GraphQLNonNull(GraphQLString)},
                email: {type: new GraphQLNonNull(GraphQLString)},
                department: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, {args}) {
                return {}
            }
        },

        editUser: {
            type: UserType,
            args: {
                id: {type: GraphQLNonNull(GraphQLString)},
                firstName: {type: GraphQLString},
                surname: {type: GraphQLString},
                email: {type: GraphQLString},
                department: {type: GraphQLString}
            },
            resolve(parentValue, {args}) {}
        },

        deleteUser: {
            type: UserType,
            args: {
                id: {type: GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, {id}) {}
        },

        addRoom: {
            type: RoomType,
            args: {
                roomSize: {type: GraphQLString},
                bookingStatus: {type: GraphQLString},
                roomNumber: {type: new GraphQLNonNull(GraphQLString)},
                roomLocation: {type: GraphQLString}
            },
            resolve(parentValue, {args}) {}
        },

        editRoom: {
            type: RoomType,
            args: {
                id: {type: GraphQLNonNull(GraphQLString)},
                roomSize: {type: GraphQLString},
                bookingStatus: {type: GraphQLString},
                roomNumber: {type: GraphQLString},
                roomLocation: {type: GraphQLString}
            },
            resolve(parentValue, {args}) {
                return {}
            }
        },

        deleteRoom: {
            type: RoomType,
            args: {
                id: {type: GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, {id}) {
                return {}
            }
        },

        addBooking: {
            type: BookingType,
            args: {
                room: {type: RoomInputType},
                user: {type: UserInputType},
                date: {type: GraphQLString},
                startTime: {type: GraphQLString},
                endTime: {type: GraphQLString}
            },
            resolve(parentValue, {args}) {
                return {}
            }
        },
        deleteBooking: {
            type: GraphQLString,
            args: {
                id: {type: GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, {id}) {
                return {}
            }
        }
    }
})

module.exports = mutation;