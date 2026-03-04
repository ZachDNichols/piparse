import type { Actions } from './$types';
import { ImapFlow } from 'imapflow';
import { error } from '@sveltejs/kit';

export const actions = {
	default: async (event) => {
        const data = await event.request.formData();

        const email = data.get('email')?.toString();
        const password = data.get('password')?.toString();
        const host = data.get('host')?.toString();

        if (email === null || email === "" || email === undefined)
        {
            error(400, "No email was provided");

        }

        if (password === null || password === "" === undefined)
        {
            error(400, "No password was provided");
        }

        if (host === null || host === "" || host === undefined)
        {
            error(400, "No host was provided");
        }
    

        const client = new ImapFlow({
            host: host,
            port: 993,
            secure: true,
            auth: {
                user: email,
                pass: password
            }
        });

        await client.connect();

        if (client.authenticated) {
            console.log("Logged in!");
        }
        else {
            console.log("Failed to authenticate");
        }
	}
} satisfies Actions;