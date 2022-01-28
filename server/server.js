const express = require('express');
const db = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3000;



//app.use(routes);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
})


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`);
    // log where we can go to test our GQL API
   // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});