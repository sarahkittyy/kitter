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
	.then(async (db: Db) => {
		const users = db.collection(config.collection);
		
		return await users.findOne(user)
		.catch(() => false)
		.then((result) => {
			return <boolean>result;
		});
	});
}