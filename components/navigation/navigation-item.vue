<template>
    <nuxt-link :to="localePath(to)" class="navbar-item">
        <span v-if="checkRoute(to)" class="has-text-weight-bold">
            {{ title }}
        </span>
        <span v-else>
            {{ title }}
        </span>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        to: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
    },
    methods: {
        checkRoute(to) {
            if (this.$route.path.includes("/en-us")) {
                if (this.$route.path.slice(6).length === 0 && to === "/") {
                    return true;
                }
                return this.$route.path.slice(6) === to;
            }
            return this.$route.path === to;
        },
    },
};
</script>
