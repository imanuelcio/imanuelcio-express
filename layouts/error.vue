<template>
    <div class="hero">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-7">
                        <h1 class="title">
                            {{ $t("util.error") }}
                        </h1>
                        <div class="card">
                            <div class="card-content">
                                {{ $t("util.errorDesc") }}
                            </div>
                        </div>
                        <div class="buttons mt-5">
                            <nuxt-link
                                :to="localePath(`/`)"
                                class="button is-info"
                            >
                                {{ $t("page.home") }}
                            </nuxt-link>
                            <nuxt-link
                                :to="localePath(`/contact-us`)"
                                class="button"
                            >
                                {{ $t("page.contact") }}
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        const title = this.$t("util.error");
        const desc = this.$t("home.description");
        const image = process.env.IMAGE;
        const url = process.env.HOST_NAME + this.$route.fullPath;

        const meta = this.$seo.meta(
            {
                title,
                desc,
                image,
                url,
            },
            [
                {
                    hid: "robots",
                    name: "robots",
                    content: "noindex, nofollow",
                },
            ]
        );

        return {
            title,
            meta,
            link: [{ rel: "canonical", href: url }],
        };
    },
};
</script>
