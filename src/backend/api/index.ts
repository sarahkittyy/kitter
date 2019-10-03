import express from 'express';
import secure from './auth/secure';
import addUser from './auth/db/addUser';
import checkLogin from './auth/checkLogin';
import { giveToken } from './auth/tokens';

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
	const username = req.body.username;
	const password = req.body.password;
	if(!username || !password)
	{
		res.status(400).send('Invalid username or password');
	}
	else
	{
		addUser({
			username: username,
			password: password
		}, (success: boolean) => {
			if(success) res.status(200).send('Successfully added user!');
			else res.status(500).send('Could not add username / password to database.');
		})
	}
});

api.post('/login', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	if(!username || !password)
	{
		res.status(400).send('Invalid username or password');
	}
	else
	{
		checkLogin({username: username, password: password})
		.catch(() => res.send(500).send('Internal server error.'))
		.then((exists: boolean) => {
			if(exists)
			{
				// The user submitted valid login details.
				giveToken(req, {username: username, password: password});
				res.status(200).send('Logged in!');
			}
			else
			{
				res.status(400).send('Invalid login details.');
			}
		});
	}
});

api.post('/logout', (req, res) => {
	req.session.API_TOKEN = undefined;
	req.session.REFRESH_TOKEN = undefined;
	res.status(200).send('Successfully logged out.');
});

api.all('/*', (req, res) => {
	res.status(404).send('No API endpoint ' + req.method + ' /api' + req.url);
});

export default api;