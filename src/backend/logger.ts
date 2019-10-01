import express from 'express';

export default function logger(req: express.Request, res: express.Response, next: express.NextFunction): void
{
	console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
	next();
}