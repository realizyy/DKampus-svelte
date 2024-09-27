import type { LayoutServerLoad } from './$types';
import { VITE_SUPABASE_ANON_KEY, VITE_SUPABASE_URL } from '$env/static/private';
import { createServerClient } from '@supabase/ssr';

/**
 * Load function for the server-side layout. This function initializes the Supabase client,
 * retrieves the session and user data, and returns them along with other necessary information.
 *
 * @param {Object} context - The context object provided by SvelteKit.
 * @param {Object} context.locals - The locals object containing server-side data and methods.
 * @param {Function} context.locals.safeGetSession - Method to safely get the session and user data.
 * @param {Object} context.cookies - The cookies object to manage cookies.
 *
 * @returns {Promise<Object>} An object containing session, user, cookies, Supabase URL, and Supabase anonymous key.
 */
export const load: LayoutServerLoad = async ({ locals: { safeGetSession }, cookies }) => {
    // Retrieve the session and user data using the safeGetSession method.
    const { session, user } = await safeGetSession();

    // Initialize the Supabase client with the provided URL and anonymous key.
    const supabase = createServerClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, {
        cookies: {
            getAll: () => cookies.getAll(),
        },
    });

    // Return the session, user, cookies, Supabase URL, and Supabase anonymous key.
    return {
        session,
        user,
        cookies: cookies.getAll(),
        supabaseUrl: VITE_SUPABASE_URL,
        supabaseAnonKey: VITE_SUPABASE_ANON_KEY,
    };
};