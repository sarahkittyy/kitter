require('dotenv').config();
import express from 'express';
import appRoot from 'app-root-path';
import api from './api';
import session from 'express-session';
import logger from './logger';

const app = express();
app.use(session({
	secret: process.env.SECRET
}));
app.use(logger); // Log incoming requests
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Static file transfer
app.use('/public', express.static('public'));
app.use('/assets', express.static('public/assets'));

// API Endpoint
app.use('/api', api);

// Favicon
app.get('/favicon.ico', (req, res) => {
	res.sendFile(appRoot.resolve('./assets/favicon.ico'));
});

// Send the html for all unhandled requests
app.get('/*', (req, res) => {
	res.sendFile(appRoot.resolve('public/index.html'));
});

// Listen on the server
app.listen(process.env.port || 3000, () => {
	console.log('listening on port ' + (process.env.port || 3000));
});