import { VITE_SUPABASE_ANON_KEY } from "$env/static/private";
import { VITE_SUPABASE_URL } from "$env/static/private";
import { createServerClient } from "@supabase/ssr";
import type { Handle } from "@sveltejs/kit";

/**
 * Handle function for SvelteKit server-side hooks. This function initializes the Supabase client
 * and attaches it to the event locals. It also provides a method to safely get the session and user data.
 *
 * @param {Object} context - The context object provided by SvelteKit.
 * @param {Object} context.event - The event object containing request and response information.
 * @param {Function} context.resolve - The resolve function to process the request.
 *
 * @returns {Promise<Object>} The resolved response.
 */
// @ts-ignore
export const handle: Handle = async ({ event, resolve }) => {
    // Initialize the Supabase client and attach it to the event locals.
    event.locals.supabase = createServerClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, {
        cookies: {
            getAll: () => event.cookies.getAll(),
            setAll: (cookiesToSet) => {
                cookiesToSet.forEach(({ name, value, options }) => {
                    event.cookies.set(name, value, { ...options, path: '/' });
                });
            },
        },
    });

    /**
     * Method to safely get the session and user data.
     *
     * @returns {Promise<Object>} An object containing the session and user data.
     */
    event.locals.safeGetSession = async () => {
        const {
            data: { session },
        } = await event.locals.supabase.auth.getSession();
        if (!session) {
            return { session: null, user: null };
        }

        const {
            data: { user },
            error,
        } = await event.locals.supabase.auth.getUser();
        if (error) {
            // JWT validation has failed
            return { session: null, user: null };
        }

        return { session, user };
    };

    // Resolve the event and filter specific response headers.
    return resolve(event, {
        filterSerializedResponseHeaders(name) {
            return name === 'content-range' || name === 'x-supabase-api-version';
        },
    });
};