import mongo from 'mongodb';
import config from './config';

/**
 * @brief Connects to the database and, if successful, calls the callback with the database.
 */
export default async function dbConnect(): Promise<mongo.Db>
{
	const client = new mongo.MongoClient(config.url);
	await client.connect();
	return client.db(config.dbname);
}