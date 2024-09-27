import { createBrowserClient, isBrowser } from '@supabase/ssr';
import type { LayoutLoad } from './$types';

/**
 * Load function for the layout. This function is responsible for initializing the Supabase client
 * and fetching the session and user data.
 *
 * @param {Object} context - The context object provided by SvelteKit.
 * @param {Function} context.fetch - The fetch function to make HTTP requests.
 * @param {Object} context.data - The data object containing session and user information.
 * @param {Function} context.depends - The function to declare dependencies for reactive loading.
 *
 * @returns {Promise<Object>} An object containing the Supabase client, session, and user data.
 */

export const load: LayoutLoad = async ({ fetch, data, depends }) => {
    // Declare a dependency on 'supabase:auth' to ensure reactive loading.
    depends('supabase:auth');

    // Initialize the Supabase client based on whether the code is running in the browser.
    const supabase = isBrowser()
        ? createBrowserClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY, {
            global: {
                fetch,
            },
        })
        : null;

    // Return the Supabase client, session, and user data.
    return { supabase, session: data.session, user: data.user };
};