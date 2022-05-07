const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema
} = graphql;



const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {type: GraphQLString},
        firstName: {type: GraphQLString },
        email: {type: GraphQLString},
        department: {type: GraphQLString}
    }
})


module.exports = UserType;