<template>
    <div class="hero">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-7">
                        <h1 class="title">
                            {{ $t("page.privacy") }}
                        </h1>
                        <notion-renderer :block-map="block" full-page />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        const title = this.$t("page.privacy");
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
        const table = await $notion.getPageTable(process.env.NOTION_STATICS_ID);
        const page = table.find((item) => item.name === "privacy-policy");
        const block = await $notion.getPageBlocks(page.id);

        return {
            page,
            block,
        };
    },
};
</script>
