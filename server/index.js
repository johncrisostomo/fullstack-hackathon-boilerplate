import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import router from './router';

mongoose.connect('mongodb://localhost:3031/auth', { useMongoClient: true });

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);
