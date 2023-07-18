<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

	export let form: ActionData;
</script>

<svelte:head>
	<title>Cric BETT | Signup</title>
</svelte:head>

<form method="POST" class="flex flex-col w-11/12 sm:w-1/2 mx-auto mt-20" use:enhance>
	<label>
		Username
		<input
			name="username"
			type="username"
			class="w-full py-2 border-2 px-4 text-gray-700 focus:outline-none"
		/>
	</label>
	{#if form?.username}
		<p class="text-red-500">Username is required.</p>
	{/if}
	<label>
		Email
		<input
			name="email"
			type="email"
			class="w-full py-2 border-2 px-4 text-gray-700 focus:outline-none"
		/>
	</label>
	{#if form?.email}
		<p class="text-red-500">Email is required.</p>
	{/if}

	<label>
		Password
		<input
			name="password"
			type="password"
			class="w-full py-2 border-2 px-4 text-gray-700 focus:outline-none"
		/>
	</label>
	{#if form?.password}
		<p class="text-red-500">Password is required.</p>
	{/if}
	{#if form?.minimum}
		<p class="text-red-500">Password should be atleast 6 characters long.</p>
	{/if}

	<label>
		Confirm Password
		<input
			name="confirmPassword"
			type="password"
			class="w-full py-2 border-2 px-4 text-gray-700 focus:outline-none"
		/>
	</label>
	{#if form?.confirmPassword}
		<p class="text-red-500">Confirm Password is required.</p>
	{/if}
	{#if form?.minimum}
		<p class="text-red-500">Confirm Password should be atleast 6 characters long.</p>
	{/if}
	{#if form?.invalidPassword}
		<p class="text-red-500">Password and confirm password don't match.</p>
	{/if}

	<button class="py-2 bg-blue-400 hover:bg-blue-600 text-white rounded-md my-2">Log in</button>
</form>
