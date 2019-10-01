import express from 'express';
import secure from './auth/secure';

// Main api endpoint (/api)
const api = express.Router();

api.get('/', [secure], (req: express.Request, res: express.Response) => {
	res.send('o3o');
});

api.all('/*', (req, res) => {
	res.status(404).send('No API endpoint /api' + req.url);
});

export default api;