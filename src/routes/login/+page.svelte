<script>
    import { supabase } from '../../lib/supabase';
    import { user } from '../../lib/store';
    //@ts-ignore
    import Header from '../../components/header.svelte';

    let email = '';
    let password = '';
    let load = false;
    let error = '';

    async function signIn() {
        load = true;
        error = '';
        const { error: signInError } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (signInError) {
            error = signInError.message;
            console.log(error);
        } else {
            console.log('Login success with email:', email);
            const { data: { user: supabaseUser } } = await supabase.auth.getUser();
            user.set(supabaseUser);
            console.log('user:', supabaseUser);
            setTimeout(() => {
                window.location.href = '/';
            }, 1000);
        }
        load = false;
    }
</script>

<Header />
<div class="flex justify-center items-center h-screen">
    <div class="w-full max-w-md">
        <div class="card shadow-lg p-5">
            <h1 class="text-2xl font-bold text-center">Login</h1>
            <form class="form-control mt-5" on:submit|preventDefault={signIn}>
                <label class="label">
                    <span class="label-text text-lg">Email</span>
                </label>
                <input type="email" bind:value={email} placeholder="Email" class="input input-bordered" />
                <label class="label mt-3">
                    <span class="label-text text-lg">Password</span>
                </label>
                <input type="password" bind:value={password} placeholder="Password" class="input input-bordered" />
                <div class="flex justify-end items-end mt-5 mb-5">
                    <a href="/forgot-password" class="text-[#F9832A]">Forgot password?</a>
                </div>
                <button type="submit" class="btn bg-[#F9832A] font-bold w-full">Login</button>
            </form>
        </div>
    </div>
</div>
