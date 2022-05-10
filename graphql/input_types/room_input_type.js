const graphql = require('graphql');


const {
    GraphQLString,
    GraphQLInt,
    GraphQLInputObjectType
} = graphql;



const RoomInputType = new GraphQLInputObjectType({
    name: 'RoomInput',
    fields: {
        _id: {type: GraphQLString},
        roomSize: {type: GraphQLInt },
        bookingStatus: {type: GraphQLString},
        roomName: {type: GraphQLString},
        roomLocation: {type: GraphQLString}
    }
})


module.exports = RoomInputType;
