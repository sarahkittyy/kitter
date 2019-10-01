import express from 'express';
import { hasApiToken } from './tokens';

/**
 * @brief Express middleware to secure a protected resource.
 */
export default function secure(req: express.Request, res: express.Response, next: express.NextFunction)
{
	if(hasApiToken(req))
	{
		return next();
	}
	else
	{
		res.status(403).send('Protected Resource');
	}
}