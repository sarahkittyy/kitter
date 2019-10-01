require('dotenv').config();
import express from 'express';
import * as path from 'path';
import appRoot from 'app-root-path';
import api from './api';

const app = express();
// Static file transfer
app.use('/public', express.static('public'));
// API endpoint
app.use('/api', api);

// Send the html for all unhandled requests
app.get('*', (req, res) => {
	res.sendFile(appRoot.resolve('public/index.html'));
});

// Listen on the server
app.listen(process.env.port || 3000, () => {
	console.log('listening...');
});