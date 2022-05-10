const graphql = require('graphql');


const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = graphql;



const RoomType = new GraphQLObjectType({
    name: 'RoomType',
    fields: {
        _id: {type: GraphQLString},
        roomSize: {type: GraphQLInt },
        bookingStatus: {type: GraphQLString},
        roomName: {type: GraphQLString},
        roomLocation: {type: GraphQLString}
    }
})


module.exports = RoomType;