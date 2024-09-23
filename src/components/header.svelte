<script>
    import { slide } from 'svelte/transition';
    import { isLoggedIn, user } from "../lib/store";
    import { supabase } from '../lib/supabase';
    import { onMount } from "svelte";
    import SearchBoxHeader from "./searchBoxHeader.svelte";

    let loggedIn = false;

    async function signOut() {
        await supabase.auth.signOut();
        isLoggedIn.set(false);
        window.location.href = '/';
    }

    onMount(async () => {
        isLoggedIn.subscribe(value => {
            loggedIn = value;
        });
        const { data: { user: supabaseUser } } = await supabase.auth.getUser();
        user.set(supabaseUser);
    });
</script>

<div class="navbar bg-neutral-400 top-0 w-full z-50 shadow-lg rounded-box">
    <div class="navbar-start">
        <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                    <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </div>
            <ul
                    tabindex="0"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a href="/">Home</a></li>
                <li><a href="/jastip">Jastip🔥</a></li>
                <li><a>Promo</a></li>
                <li><a>Keranjang</a></li>
                <li><a>Favorit</a></li>
            </ul>
        </div>
    </div>
    <div class="navbar-center">
        <a class="btn btn-ghost text-xl" href="/">
            <img src="/logoDkampus.svg" alt="DKampus" class="w-10 h-10">
            DKampus
        </a>
    </div>
    <div class="navbar-end">
        {#if loggedIn}
            <!--Search button-->
            <button class="btn btn-ghost btn-circle">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                    <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
            <!--Notification button-->
            <button class="btn btn-ghost btn-circle">
                <div class="indicator">
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                        <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span class="badge badge-xs badge-warning indicator-item"></span>
                </div>
            </button>
            <!-- User button with dropdown menu -->
            <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                    <img src="/person.svg" alt="User" width="40%">
                </div>
                <ul
                        tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <!--Profile info-->
                    <div class="flex flex-col items-center gap-1.5">
                        <img src="/person.svg" alt="User" width="40%">
                        {#if $user}
                            <h1 id="username" class="text-lg">username</h1>
                            <p id="email" class="text-sm">{$user.email}</p>
                            <p id="phone" class="text-sm">{$user.phone}</p>
                        {/if}
                    </div>
                    <div class="divider divider-neutral"></div>
                    <li><a>Edit Profile</a></li>
                    <li><a class="bg-red-400" on:click={signOut}>Logout</a></li>
                </ul>
            </div>
        {:else}
            <!--login button-->
            <button class="btn rounded-box btn-ghost mx-2" on:click={() => window.location.href = "/login"}>
                Login
            </button>
            <!--Register button-->
            <button class="btn rounded-box btn-ghost" on:click={() => window.location.href = "/register"}>
                Register
            </button>
        {/if}
    </div>
</div>