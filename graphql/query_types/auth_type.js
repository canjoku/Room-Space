const graphql = require('graphql');


const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLID
} = graphql;



const AuthType = new GraphQLObjectType({
    name: 'AuthType',
    fields: {
        userId: {type: GraphQLID},
        token: {type: GraphQLString },
        tokenExpiration: {type: GraphQLInt}
    }
})


module.exports = AuthType;