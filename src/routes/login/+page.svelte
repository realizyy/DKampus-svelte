<script>
    import Header from '../../components/header.svelte';
    import { goto } from '$app/navigation';
    import {supabase} from "$lib/supabase";

    let email = '';
    let password = '';
    let error = '';
    let load = false;

    async function handleLogin(event) {
        load = true;
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append('email', email);
        formData.append('password', password);
        const response = await fetch('/api/login',
            {
                method: 'POST',
                body: formData
            });

        if (response.ok) {
            load = false;
            const data = await response.json();
            //get session access token and refresh token ???????????????
            console.log('access token\n', data['user']['session']['access_token']);
            supabase.auth.setSession(data['user']['session']['access_token']);
            // goto('/');
        } else {
            load = false;
            const data = await response.json();
            error = data['error'];
        }
    }
</script>


<Header />
<div class="flex justify-center items-center h-screen">
    <div class="w-full max-w-md">
        <div class="card shadow-lg p-5">
            <h1 class="text-2xl font-bold text-center">Login</h1>
            <form class="form-control mt-5" on:submit={handleLogin}>
                <label class="label">
                    <span class="label-text text-lg">Email</span>
                </label>
                <input type="email" bind:value={email} placeholder="Email" class="input input-bordered" required />
                <label class="label mt-3">
                    <span class="label-text text-lg">Password</span>
                </label>
                <input type="password" bind:value={password} placeholder="Password" class="input input-bordered" required />
                <div class="flex justify-end items-end mt-5 mb-5">
                    <a href="/forgot-password" class="text-[#F9832A]">Forgot password?</a>
                </div>
                <button type="submit" class="btn bg-[#F9832A] font-bold w-full">
                    {#if load}
                        <svg class="animate-spin h-5 w-5 text-slate-900"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="12" y1="2" x2="12" y2="6" />  <line x1="12" y1="18" x2="12" y2="22" />  <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />  <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />  <line x1="2" y1="12" x2="6" y2="12" />  <line x1="18" y1="12" x2="22" y2="12" />  <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />  <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" /></svg>
                        Loading
                    {:else}
                        Login
                    {/if}
                </button>
                {#if error !== ''}
                <div class="alert alert-error mt-5">
                    {error}
                </div>
                {/if}
            </form>
        </div>
    </div>
</div>