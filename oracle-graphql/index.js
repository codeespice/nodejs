const http = require('http');
const express = require('express');
const morgan = require('morgan');
const graphqlHTTP = require('express-graphql');
const database = require('./services/database')
const {GraphQLSchema} = require('graphql');
const {QueryRoot} = require('./model/QueryRoot');
const app = express();
httpServer = http.createServer(app);

const graphQLSchema = new GraphQLSchema({
  description: 'GraphQLSchema for the HR Schema',
  query: QueryRoot
});

async function startup() {
  console.log('Starting application');

  try {
    console.log('Initializing database module');

    await database.initialize();
  } catch (err) {
    console.error(err);

    process.exit(1); // Non-zero failure code
  }

  try {
    console.log('Initializing web server module');
    app.use(morgan('combined'));
    

app.use('/graphql', graphqlHTTP({
  schema: graphQLSchema,
  graphiql: true
}));

httpServer.listen(3031)
      .on('listening', () => {
        console.log('Web server listening on localhost:3031');

       
      })
      .on('error', err => {
        console.log(err)
      });
  } catch (err) {
    console.error(err);

    process.exit(1); // Non-zero failure code
  }
}
// Combines logging info from request and response

startup()