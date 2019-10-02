import config from './config';
import dbConnect from './dbConnect';
import { MongoError, Db } from 'mongodb';

export interface User
{
	username: string;
	password: string;	
};

/**
 * @brief Adds a user to the database.
 */
export default async function addUser(user: User, callback: (success: boolean) => any)
{
	dbConnect().catch(() => callback(false))
	.then((db: Db) => {
		const users = db.collection(config.collection);
		
		users.findOne({username: user.username}, (error: MongoError, result: any) => {
			if(error) callback(false);
			else if(result) callback(false);
			else
			{	
				users.insertOne(user)
				.catch(() => callback(false))
				.then(() => callback(true));
			}
		});
	});
}