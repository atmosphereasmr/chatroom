const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const controller = require('./controller');
require('dotenv').config();

const app = express();

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance);
});

app.use(express.static(__dirname + '/build'))

app.use( bodyParser.json() );
app.use( cors() );


app.get('/api/messages', controller.getPlanes)
app.post('/api/messages', controller.addPlane)
app.delete('/api/messages', controller.erase)


const port = process.env.PORT || 3001
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );
