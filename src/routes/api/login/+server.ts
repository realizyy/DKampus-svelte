import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabase';

export async function POST({ request }) {
    const data = await request.formData();
    const email = data.get('email') as string | null;
    const password = data.get('password') as string | null;

    if (!email || !password) {
        return json({ error: 'Email and password are required' }, { status: 400 });
    }

    try {
        const { data: user, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return json({ error: error.message }, { status: 401 });
        }

        return json({ message: 'Login berhasil', user });
    } catch (error) {
        console.error(error);
        return json({ error: 'An error occurred' }, { status: 500 });
    }
}