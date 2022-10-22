import { Client, Account, Databases } from 'appwrite';
import config from './config';

const client = new Client();

client
  .setEndpoint(config.appwriteURL) // Your Appwrite API Endpoint
  .setProject(config.appwriteProjectID);


const appwrite = {
  client,
  database: new Databases(client),
}

export default appwrite;