const graphql = require('graphql');
const RoomType = require('./room_query_type')
const UserType = require('./user_query_type')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLSchema
} = graphql;



const BookingType = new GraphQLObjectType({
    name: 'Booking',
    fields: {
        id: {type: GraphQLString},
        room: {type: RoomType},
        occupant: {type: UserType},
        date: {type: GraphQLString},
        startTime: {type: GraphQLString},
        endTime: {type: GraphQLString}
    }
})



module.exports = BookingType;