import { writable } from 'svelte/store';
import type { User } from '@supabase/supabase-js';

export const isLoggedIn = writable(false);
export const user = writable<User | null>(null);