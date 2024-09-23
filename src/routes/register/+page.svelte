<script>
    import { supabase } from '../../lib/supabase';
    //@ts-ignore
    import Header from '../../components/header.svelte';

    let name = '';
    let email = '';
    let password = '';
    let phone = '';
    let load = false;

    async function signUp() {
        load = true;
        try{
            if (password.length < 6) {
                throw new Error('Password must be at least 6 characters');
            }
            if (password !== password) {
                throw new Error('Password not match');
            }
        } catch (error) {
            console.log(error);
            load = false;
            return;
        }

        const { data: authData, error: authError } = await supabase.auth.signUp({
            email,
            password,
        });

        if (authError) {
            console.log(authError);
        } else {
            console.log('sign up success with email:', email);

            // Simpan data pengguna ke tabel 'users'
            const { error: insertError } = await supabase
                .from('users')
                .insert([
                    {
                        id: authData.user?.id, // Ambil ID dari respons autentikasi
                        nama_user: name,
                        email: email,
                        role: 'customer',
                        no_telp: phone,
                        restriction: false,
                    }
                ]);

            if (insertError) {
                console.log(insertError);
            } else {
                console.log('insert user success with email:', email);
                window.location.href = '/login';
            }
        }

        load = false;
    }

</script>

<Header />
<div class="flex justify-center items-center h-screen">
    <div class="w-full max-w-md">
        <div class="card shadow-lg p-5">
            <h1 class="text-2xl font-bold text-center">Login</h1>
            <form class="form-control mt-5" on:submit|preventDefault={signUp}>
                <label class="label">
                    <span class="label-text text-lg">Name</span>
                </label>
                <input type="text" bind:value={name} placeholder="Name" class="input input-bordered" />
                <label class="label mt-3">
                    <span class="label-text text-lg">Email</span>
                </label>
                <input type="email" bind:value={email} placeholder="Email" class="input input-bordered" />
                <label class="label mt-3">
                    <span class="label-text text-lg">Phone</span>
                </label>
                <input type="text" bind:value={phone} placeholder="Phone" class="input input-bordered" />
                <label class="label mt-3">
                    <span class="label-text text-lg">Password</span>
                </label>
                <input type="password" bind:value={password} placeholder="Password" class="input input-bordered" />
                <label class="label mt-3">
                    <span class="label-text text-lg">Confirm Password</span>
                </label>
                <input type="password" placeholder="Confirm Password" class="input input-bordered" />
                <div class="flex justify-end items-end mt-5">
                    <a href="/login" class="text-[#F9832A]">Already have an account?</a>
                </div>
                <button type="submit" class="btn bg-[#F9832A] font-bold mt-5 w-full">Signup</button>
            </form>
        </div>
    </div>
</div>
