const graphql = require('graphql');


const {
    GraphQLString,
    GraphQLInputObjectType
} = graphql;



const UserInputType = new GraphQLInputObjectType({
    name: 'UserInput',
    fields: {
        id: {type: GraphQLString},
        firstName: {type: GraphQLString },
        surname: {type: GraphQLString},
        email: {type: GraphQLString},
        department: {type: GraphQLString},
    }   
})


module.exports = UserInputType;