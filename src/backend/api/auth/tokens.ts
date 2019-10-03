import express from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../auth/db/addUser';

export interface TokenPayload
{
	username: string;
}

/**
 * @brief Gives the given request's session a signed jwt based on the input user details.
 */
export function giveToken(req: express.Request, user: User)
{
	let payload: TokenPayload = {
		username: user.username
	};
	
	req.session.REFRESH_TOKEN = jwt.sign(payload, process.env.SECRET, {
		expiresIn: '24h'
	});
	refreshToken(req);
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

/**
 * @brief Tries to refresh the api token using the refresh token. False if no refresh token exists.
 */
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
				expiresIn: "10m"
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