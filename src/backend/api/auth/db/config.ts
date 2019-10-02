export interface MongoSettings {
	url: string;
	dbname: string;
};

export default <MongoSettings>{
	url: 'mongodb://localhost:27017',
	dbname: 'users'
}