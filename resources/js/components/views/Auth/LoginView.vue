<template>
    <div class="flex min-h-full flex-col justify-center px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <div class="space-y-6">
                <div>
                    <label for="email" class="block text-sm/6 font-medium">Email address</label>
                    <div class="mt-2">
                        <input type="email" v-model="email" name="email" id="email" autocomplete="email" required
                            class="block w-full rounded-md focus:bg-white focus:text-black px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm/6 font-medium">Password</label>
                    </div>
                    <div class="mt-2">
                        <input type="password" v-model="password" name="password" id="password" autocomplete="current-password" required
                            class="block w-full rounded-md focus:bg-white focus:text-black px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                    </div>
                </div>

                <div>
                    <button type="submit" @click="checkForm() && login()"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Sign in
                    </button>
                </div>
            </div>

            <p class="mt-10 text-center text-sm/6 text-gray-500">
                Not a member?
                <router-link class="font-semibold text-indigo-600 hover:text-indigo-500"
                    :to="{ name: 'register' }">Register</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import { useAuthStore } from '../../../stores/auth';

export default {
    name: "LoginView",

    data() {
        return {
            email: null,
            password: null,
        }
    },

    methods: {
        checkForm() {
            return this.email?.length > 0 && this.password?.length > 0;
        },

        login() {
            useAuthStore().login({
                email: this.email,
                password: this.password,
            })

            if (useAuthStore().loaded) {
                this.$router.push({ name: 'dashboard' });
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>
