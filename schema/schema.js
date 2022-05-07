const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLSchema
} = graphql;

const RootQuery = require('./types/root_query_type');

module.exports = new GraphQLSchema({
    query: RootQuery
});








