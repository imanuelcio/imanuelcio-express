<template>
    <div>
        <home-hero :pricing="pricing" />
        <home-service :services="services" />
        <home-article :articles="articles" />
    </div>
</template>

<script>
export default {
    head() {
        const title = this.$t("page.home");
        const desc = this.$t("home.description");
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
        const tablePricing = await $notion.getPageTable(
            process.env.NOTION_PRICING_ID
        );
        const pricing = tablePricing.filter((item) => item.active);

        const tableServices = await $notion.getPageTable(
            process.env.NOTION_SERVICE_ID
        );
        const services = tableServices.filter((item) => item.active);

        const tableArticles = await $notion.getPageTable(
            process.env.NOTION_ARTICLE_ID
        );
        const articles = tableArticles
            .sort((a, b) => a.date - b.date)
            .slice(0, 4)
            .filter((item) => item.active);

        return {
            services,
            articles,
            pricing,
        };
    },
};
</script>
