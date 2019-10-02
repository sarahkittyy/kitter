export interface MongoSettings {
	url: string;
	dbname: string;
	collection: string;
};

export default <MongoSettings>{
	url: 'mongodb://localhost:27017',
	dbname: 'users',
	collection: 'users'
}