import express from 'express';
import jwt from 'jsonwebtoken';

export interface TokenPayload
{
	
}

/**
 * @brief Returns true if the user has a valid and not-expired api token.
 * If no api token is found, it tries to refresh it using a refresh token before returning false.
 */
export function hasApiToken(req: express.Request): boolean
{
	let token = getToken(req);
	if(!token)
	{
	 	return false;
	}
	else
	{
		try
		{
			jwt.verify(token, process.env.SECRET);
			return true;
		}
		catch(e)
		{
			return false;
		}
	}
}

/**
 * @brief Returns the user's valid API_TOKEN. Tries to refresh if possible.
 * If both tokens are invalid, returns undefined.
 */
export function getToken(req: express.Request): string | undefined
{
	if(req.session.API_TOKEN)
	{
		return req.session.API_TOKEN;
	}
	else
	{
		if(refreshToken(req))
		{
			return req.session.API_TOKEN;
		}
		else
		{
			return undefined;
		}
	}
}

export function refreshToken(req: express.Request): boolean
{
	if(req.session.REFRESH_TOKEN)
	{
		try
		{
			jwt.verify(req.session.REFRESH_TOKEN, process.env.SECRET);
			// Refresh the api token.
			req.session.API_TOKEN = jwt.sign({
				
			}, process.env.SECRET, {
				expiresIn: "8h"
			});
			return true;
		}
		catch(e)
		{
			return false;
		}
	}
	else
	{
		return false;
	}
}