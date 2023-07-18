<template>
    <div class="hero">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">{{ $t("page.article") }}</h1>
                <h2 class="subtitle is-5 pt-1 light">
                    {{ $t("util.articleDesc") }}
                </h2>
                <div v-if="articles.length < 1">
                    {{ $t("util.empty") }}
                </div>
                <div v-else class="columns is-multiline">
                    <div
                        v-for="article in articles"
                        :key="article.slug"
                        class="column is-3"
                    >
                        <article-card :article="article" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        const title = this.$t("page.article");
        const desc = this.$t("util.articleDesc");
        const image = process.env.IMAGE;
        const url = process.env.HOST_NAME + this.$route.fullPath;

        const meta = this.$seo.meta({
            title,
            desc,
            image,
            url,
        });

        return {
            title,
            meta,
            link: [{ rel: "canonical", href: url }],
        };
    },
    async asyncData({ $notion }) {
        const table = await $notion.getPageTable(process.env.NOTION_ARTICLE_ID);
        const articles = table
            .sort((a, b) => a.date - b.date)
            .filter((item) => item.active);

        return {
            articles,
        };
    },
};
</script>
