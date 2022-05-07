const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
} = graphql;



const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {type: GraphQLString},
        firstName: {type: GraphQLString },
        surname: {type: GraphQLString},
        email: {type: GraphQLString},
        department: {type: GraphQLString},
    }
})


module.exports = UserType;