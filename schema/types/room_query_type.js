const graphql = require('graphql');


const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLSchema
} = graphql;



const RoomType = new GraphQLObjectType({
    name: 'Room',
    fields: {
        id: {type: GraphQLString},
        size: {type: GraphQLInt },
        status: {type: GraphQLString},
        roomNumber: {type: GraphQLString},
        location: {type: GraphQLString}
    }
})


module.exports = RoomType;