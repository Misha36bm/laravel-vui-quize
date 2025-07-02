<template>
    <div class="h-96 max-md:h-[31.25rem]">
        <nav class="navbar rounded-box shadow-base-300/20 shadow-sm">
            <div class="navbar-start">
                <a class="link text-base-content link-neutral text-xl font-bold no-underline" href="#">
                    Quize App
                </a>
            </div>
            <div class="navbar-center max-md:hidden">
                <ul class="menu menu-horizontal gap-2 p-0 text-base rtl:ml-20">
                    <!-- <li
                        class="dropdown relative inline-flex [--auto-close:inside] [--offset:9] [--placement:bottom-end]">
                        <button id="dropdown-end" type="button"
                            class="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content max-md:px-2"
                            aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                            Products
                            <span class="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
                        </button>
                        <ul class="dropdown-menu dropdown-open:opacity-100 hidden w-48" role="menu"
                            aria-orientation="vertical" aria-labelledby="nested-dropdown">
                            <li><a class="dropdown-item" href="#">Templates</a></li>
                            <li><a class="dropdown-item" href="#">UI kits</a></li>
                            <li class="dropdown relative [--auto-close:inside] [--offset:10] [--placement:right-start]">
                                <button id="nested-dropdown-2"
                                    class="dropdown-toggle dropdown-item dropdown-open:bg-base-content/10 dropdown-open:text-base-content justify-between"
                                    aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                    Components
                                    <span class="icon-[tabler--chevron-right] size-4 rtl:rotate-180"></span>
                                </button>
                                <ul class="dropdown-menu dropdown-open:opacity-100 hidden w-48" role="menu"
                                    aria-orientation="vertical" aria-labelledby="nested-dropdown-2">
                                    <li><a class="dropdown-item" href="#">Basic</a></li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Advanced
                                            <span
                                                class="badge badge-sm badge-soft badge-primary rounded-full">Pro</span>
                                        </a>
                                    </li>
                                    <li
                                        class="dropdown relative [--auto-close:inside] [--offset:10] rtl:[--placement:left-start] [--placement:right-start]">
                                        <button id="nested-dropdown-2"
                                            class="dropdown-toggle dropdown-item dropdown-open:bg-base-content/10 dropdown-open:text-base-content justify-between"
                                            aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                            Vendor
                                            <span class="icon-[tabler--chevron-right] size-4 rtl:rotate-180"></span>
                                        </button>
                                        <ul class="dropdown-menu dropdown-open:opacity-100 hidden w-48" role="menu"
                                            aria-orientation="vertical" aria-labelledby="nested-dropdown-2">
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Data tables
                                                    <span
                                                        class="badge badge-sm badge-soft badge-primary rounded-full">Pro</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    Apex charts
                                                    <span
                                                        class="badge badge-sm badge-soft badge-primary rounded-full">Pro</span>
                                                </a>
                                            </li>
                                            <li><a class="dropdown-item" href="#">Clipboard</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li> -->
                    <li>
                        <router-link :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'dashboard' }">Quizzes</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'quizes.create' }">Create my own quize</router-link>
                    </li>
                </ul>
            </div>
            <div class="navbar-end items-center gap-4">
                <!-- <a class="btn btn-primary" href="#">Login</a> -->
                <router-link class="btn btn-primary" :to="{ name: 'login' }">
                    Login
                </router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "NavbarComponent",
}
</script>

<style lang="scss" scoped></style>
