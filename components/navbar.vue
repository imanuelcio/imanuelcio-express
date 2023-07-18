<template>
    <nav class="navbar is-info">
        <div class="navbar-brand">
            <nuxt-link
                :to="localePath(`/`)"
                class="navbar-item has-text-weight-medium"
            >
                {{ $t("title") }}
            </nuxt-link>
            <button class="navbar-burger">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </button>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end">
                <navigation-item to="/" :title="$t('page.home')" />
                <navigation-item to="/booking" :title="$t('page.booking')" />
                <navigation-item to="/about-us" :title="$t('page.about')" />
                <navigation-item to="/article" :title="$t('page.article')" />
                <navigation-item to="/order" :title="$t('page.order')" />
                <nuxt-link
                    class="navbar-item"
                    v-for="locale in locales"
                    :key="locale.code"
                    :to="switchLocalePath(locale.code)"
                    >{{ locale.name }}</nuxt-link
                >
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            path: this.$route.path,
        };
    },
    computed: {
        locales() {
            return this.$i18n.locales.filter(
                (i) => i.code !== this.$i18n.locale
            );
        },
    },
};
</script>
