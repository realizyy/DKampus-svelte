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
                <li><a href="/pesanan">Pesanan</a></li>
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
        <!--Theme switcher-->
        <label class="swap swap-rotate items-center justify-center mx-2">
            <!-- this hidden checkbox controls the state -->
            <input type="checkbox" class="theme-controller" value="dark" />

            <!-- sun icon -->
            <svg
                    class="swap-off h-[25px] w-[25px] mx-1 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                <path
                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <!-- moon icon -->
            <svg
                    class="swap-on h-[25px] w-[25px] mx-1 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                <path
                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
        </label>
        {#if loggedIn}
<!--            &lt;!&ndash;Search button&ndash;&gt;-->
<!--            <button class="btn btn-ghost btn-circle">-->
<!--                <svg-->
<!--                        xmlns="http://www.w3.org/2000/svg"-->
<!--                        class="h-5 w-5"-->
<!--                        fill="none"-->
<!--                        viewBox="0 0 24 24"-->
<!--                        stroke="currentColor">-->
<!--                    <path-->
<!--                            stroke-linecap="round"-->
<!--                            stroke-linejoin="round"-->
<!--                            stroke-width="2"-->
<!--                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />-->
<!--                </svg>-->
<!--            </button>-->
            <!--Notification button with dropdown-->
            <div class="dropdown dropdown-end">
                <button tabindex="0" class="btn btn-ghost btn-circle">
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
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-[1]">
                    <!-- No notification -->
                    <li class="text-center">No notification yet</li>
                </ul>
            </div>
            <!-- User button with dropdown menu -->
            <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                    <img src="/person.svg" alt="User" width="40%">
                </div>
                <ul
                        tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <!--Profile info-->
                    <div class="flex flex-col items-center">
                        <img src="/person.svg" alt="User" width="40%">
                        {#if $user}
                            <h1 id="username" class="text-lg">username</h1>
                            <p id="email" class="text-sm">{$user.email}</p>
                            <p id="phone" class="text-sm">address</p>
                        {/if}
                    </div>
                    <div class="bg-black h-px my-2"></div> <!-- Divider line -->
                    <li><a>Edit Profile</a></li>
                    <li>
                        <a class="bg-red-400" on:click={signOut}>
                            <img src="/logOut.svg" alt="Logout">
                            Logout
                        </a>
                    </li>
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