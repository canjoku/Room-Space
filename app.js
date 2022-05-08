const express = require('express');
const bodyParser = require('body-parser');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const schema = require('./graphql/schema');
const mongoose = require('mongoose');
const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.44rgl.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

const app = express();


if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

app.use(bodyParser.json());

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}))


app.listen(5000);