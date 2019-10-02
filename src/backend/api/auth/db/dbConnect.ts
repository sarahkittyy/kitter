import mongo from 'mongodb';
import config from './config';

/**
 * @brief Connects to the database and, if successful, calls the callback with the database.
 */
export default async function dbConnect(callback: (err?: any, db?: mongo.Db) => any)
{
	const client = new mongo.MongoClient(config.url);
	client.connect()
	.catch((reason: any) => {
		callback(reason);
	})
	.then(() => {
		callback(undefined, client.db(config.dbname));
		client.close();
	});
}