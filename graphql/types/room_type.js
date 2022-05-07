const graphql = require('graphql');


const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = graphql;



const RoomType = new GraphQLObjectType({
    name: 'Room',
    fields: {
        id: {type: GraphQLString},
        roomSize: {type: GraphQLInt },
        bookingStatus: {type: GraphQLString},
        roomNumber: {type: GraphQLString},
        roomLocation: {type: GraphQLString}
    }
})


module.exports = RoomType;