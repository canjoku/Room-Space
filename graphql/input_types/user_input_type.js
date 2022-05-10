const graphql = require('graphql');


const {
    GraphQLString,
    GraphQLInputObjectType
} = graphql;



const UserInputType = new GraphQLInputObjectType({
    name: 'UserInput',
    fields: {
        _id: {type: GraphQLString},
        firstName: {type: GraphQLString },
        surname: {type: GraphQLString},
        email: {type: GraphQLString},
        department: {type: GraphQLString},
        password: {type: GraphQLString}
    }   
})


module.exports = UserInputType;

