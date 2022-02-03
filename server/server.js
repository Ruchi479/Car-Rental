const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const dbConnection = require('./config/connection');
app.use(express.json())

app.use('/api/cars/' , require('./routes/carsRoute'))
app.use('/api/users/' , require('./routes/usersRoute'))
app.use('/api/bookings/' , require('./routes/bookingsRoute'))


const path = require('path')

if(process.env.NODE_ENV==='production')
{

    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

          res.sendFile(path.resolve(__dirname, 'client/build/index.html'));

    })

}

app.get('/', (req, res) => res.send('Hello World!'))


 


app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`))





// const express = require('express');
// const db = require('./config/connection');
// const app = express();
// const PORT = process.env.PORT || 3000;



// //app.use(routes);
// // app.get('*', (req, res) => {
// //   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// // })

// app.get('/', (req, res) => res.send('Hello World'));

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`🌍 Now listening on localhost:${PORT}`);
//     // log where we can go to test our GQL API
//    // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//   });
// });