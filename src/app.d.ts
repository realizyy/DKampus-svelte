// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { SupabaseClient, Session } from '@supabase/supabase-js'

declare global {
	namespace App {
		/**
		 * Interface for local variables available in the SvelteKit app.
		 */
		interface Locals {
			/**
			 * Supabase client instance.
			 * @type {SupabaseClient}
			 */
			supabase: SupabaseClient

			/**
			 * Method to safely get the session and user data.
			 * @returns {Promise<{ session: Session | null; user: User | null }>}
			 */
			safeGetSession(): Promise<{ session: Session | null; user: User | null }>
		}

		/**
		 * Interface for page data available in the SvelteKit app.
		 */
		interface PageData {
			/**
			 * Current session data.
			 * @type {Session | null}
			 */
			session: Session | null

			/**
			 * Current user data.
			 * @type {User | null}
			 */
			user: User | null
		}

		// interface Error {}
		// interface Platform {}
	}
}