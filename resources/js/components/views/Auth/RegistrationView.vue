<template>
    <div class="flex min-h-full flex-col justify-center px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <div class="space-y-6">
                <div>
                    <label for="name" class="block text-sm/6 font-medium">Name</label>
                    <div class="mt-2">
                        <input type="name" v-model="name" name="name" id="name" autocomplete="name"
                            required
                            class="block w-full rounded-md focus:bg-white focus:text-black px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                    </div>
                </div>

                <div>
                    <label for="email" class="block text-sm/6 font-medium">Email address</label>
                    <div class="mt-2">
                        <input type="email" v-model="email" name="email" id="email"
                            autocomplete="email" required
                            class="block w-full rounded-md focus:bg-white focus:text-black px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm/6 font-medium">Password</label>
                    </div>
                    <div class="mt-2">
                        <input type="password" v-model="password" name="password" id="password"
                            autocomplete="current-password" required
                            class="block w-full rounded-md focus:bg-white focus:text-black px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password_confirmation" class="block text-sm/6 font-medium">Confirm Password</label>
                    </div>
                    <div class="mt-2">
                        <input type="password" v-model="password_confirmation"
                            name="password_confirmation" id="password_confirmation" autocomplete="false" required
                            class="block w-full rounded-md focus:bg-white focus:text-black px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                    </div>
                </div>

                <div>
                    <button type="submit" @click="checkForm() && register()"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Sign up
                    </button>
                </div>
            </div>

            <p class="mt-10 text-center text-sm/6 text-gray-500">
                Already a member?
                <router-link class="font-semibold text-indigo-600 hover:text-indigo-500"
                    :to="{ name: 'login' }">Login</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import { useAuthStore } from '../../../stores/auth';

export default {
    name: "RegistrationView",

    data() {
        return {
            name: null,
            email: null,
            password: null,
            password_confirmation: null,
        }
    },

    methods: {
        register() {
            useAuthStore().registerUser({
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
            })

            if (useAuthStore().loaded) {
                this.$router.push({ name: 'dashboard' });
            }
        },

        checkForm() {
            return this.name?.length > 0
                && this.email?.length > 0
                && this.password?.length > 0
                && this.password_confirmation?.length > 0
                && (this.password === this.password_confirmation);
        }
    }
}
</script>

<style lang="scss" scoped></style>
