import { User } from './db/addUser';
import dbConnect from './db/dbConnect';
import config from './db/config';
import { Db, MongoError } from 'mongodb';

/**
 * @brief Checks if the given login information is valid.
 */
export default async function checkLogin(user: User): Promise<boolean>
{
	return await dbConnect()
	.catch(() => false)
	.then((db: Db) => {
		const users = db.collection(config.collection);
		
		users.findOne(user, (err: MongoError, result: any) => {
			if(err) return false;
			
			console.log(result);
			return true;	
		});
		return false;
	});
}