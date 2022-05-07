const express = require('express');
const bodyParser = require('body-parser');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema')

const app = express();

app.use(bodyParser.json());

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}))


app.listen(5000);