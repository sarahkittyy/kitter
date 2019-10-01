import express from 'express';
import secure from './auth/secure';

// Main api endpoint (/api)
const api = express.Router();

api.get('/', [secure], (req: express.Request, res: express.Response) => {
	res.send('o3o');
});

api.get('/verifyAuth', [secure], (req: express.Request, res: express.Response) => {
	res.json({ authenticated: true });
});

api.get('/verifyAuth', (req, res) => {
	res.json({ authenticated: false })
});

api.post('/signup', (req, res) => {
	
});

api.all('/*', (req, res) => {
	res.status(404).send('No API endpoint ' + req.method + ' /api' + req.url);
});

export default api;