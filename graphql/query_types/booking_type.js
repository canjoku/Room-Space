const graphql = require('graphql');
const RoomType = require('./room_type')
const UserType = require('./user_type')

const {
    GraphQLObjectType,
    GraphQLString,
} = graphql;



const BookingType = new GraphQLObjectType({
    name: 'BookingType',
    fields: {
        id: {type: GraphQLString},
        room: {type: RoomType},
        user: {type: UserType},
        date: {type: GraphQLString},
        startTime: {type: GraphQLString},
        endTime: {type: GraphQLString}
    }
})



module.exports = BookingType;