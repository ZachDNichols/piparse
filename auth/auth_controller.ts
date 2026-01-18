import credentials from '../credentials.json';
import {google} from 'googleapis'
import http, { IncomingMessage, ServerResponse } from "http";
import open from "open";


async function get_auth() {
    const redirect_uri = "http://localhost:3000/callback"
    
    const oauth2Client = new google.auth.OAuth2(
      credentials.installed.client_id,
      credentials.installed.client_secret,
      redirect_uri
    );
    
    // generate a url that asks permissions for Blogger and Google Calendar scopes
    const scopes = [
        'https://www.googleapis.com/auth/gmail.readonly'
    ];
    
    const url = oauth2Client.generateAuthUrl({
      // 'online' (default) or 'offline' (gets refresh_token)
      access_type: 'offline',
    
      // If you only need one scope, you can pass it as a string
      scope: scopes
    });
    
    const result = await getAuthCode(url);
    console.log(result)
}

function getAuthCode(authUrl: string): Promise<string> {
  return new Promise((resolve) => {
    const server = http.createServer(
      (request: IncomingMessage, response: ServerResponse) => {
        if (!request.url) return;

        const url = new URL(request.url, "http://localhost:3000");
        const code = url.searchParams.get("code");

        if (!code) return;

        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end("Authorization complete. You may close this window.");

        resolve(code);

        server.close();
        console.log("Server closed");
      }
    );

    server.listen(3000, "localhost", () => {
      void open(authUrl);
    });
  });
}


get_auth()