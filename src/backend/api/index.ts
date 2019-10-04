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

/// /api/verifyAuth -> returns {authenticated: true|false}
api.get('/verifyAuth', [secure], (req: express.Request, res: express.Response) => {
	res.json({ authenticated: true });
});
api.get('/verifyAuth', (req, res) => {
	res.json({ authenticated: false })
});
/// Attempts to signup to the website using the username and password body params
api.post('/signup', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	if(!username || !password)
	{
		res.status(200).send({response: 'Invalid username or password', success: false});
	}
	else
	{
		addUser({
			username: username,
			password: password
		}, (success: boolean) => {
			if(success) res.status(200).send({response: 'Successfully added user!', success: true});
			else res.status(200).send({response: 'Username already exists!', success: false});
		})
	}
});
/// Attempts to login using existing username and password credentials
/// If the credentials are valid, adds the refresh and api token to the express session.
api.post('/login', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	if(!username || !password)
	{
		res.status(200).send({response: 'Invalid username or password', success: false});
	}
	else
	{
		checkLogin({username: username, password: password})
		.catch(() => res.send(500).send({response: 'Internal server error.', success: false}))
		.then((exists: boolean) => {
			if(exists)
			{
				// The user submitted valid login details.
				giveToken(req, {username: username, password: password});
				res.status(200).send({response: 'Logged in!', success: true});
			}
			else
			{
				res.status(200).send({response: 'Invalid login details.', success: false});
			}
		});
	}
});
/// Detaches the api and refresh tokens from the session.
api.post('/logout', (req, res) => {
	req.session.API_TOKEN = undefined;
	req.session.REFRESH_TOKEN = undefined;
	res.status(200).send({response: 'Successfully logged out.', success: true});
});
/// All other endpoints are a generic 404 error.
api.all('/*', (req, res) => {
	res.status(404).send({response: 'No API endpoint ' + req.method + ' /api' + req.url});
});

export default api;