import path from 'node:path';
import process from 'node:process';
import {authenticate} from '@google-cloud/local-auth';
import {google} from 'googleapis';

// The scope for reading Gmail labels.
const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
// The path to the credentials file.
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

/**
 * Lists the labels in the user's account.
 */
async function listLabels() {
  // Authenticate with Google and get an authorized client.
  const auth = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });

  // Create a new Gmail API client.
  const gmail = google.gmail({version: 'v1', auth});
  //Get list of messages
  const result = await gmail.users.messages.list({
    userId: 'me',
    maxResults: 5,
    includeSpamTrash: false,
    q: "no-reply@accounts.google.com"
  });
  console.log(result)
  const messages = result.data.messages;
  if (!messages || messages.length === 0) {
    console.log('No messages found.');
    return;
  }
  messages.forEach(message => {
    console.log(message)
  })


}

await listLabels();