import { json } from '@sveltejs/kit';

export async function POST({ request, cookies }) {
	const { email, emailPass, imapHost} = await request.json();

    return json({ email }, { status: 201 })
}