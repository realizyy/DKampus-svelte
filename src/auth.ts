// src/lib/auth.ts
import { supabase } from '$lib/supabase';

export async function login(email: string, password: string) {
    return supabase.auth.signInWithPassword({
        email,
        password,
    });
}