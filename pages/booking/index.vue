<template>
    <div class="hero">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-7">
                        <h1 class="title">
                            {{ $t("page.booking") }}
                        </h1>
                        <h2 class="subtitle is-5 pt-1 light">
                            {{ $t("booking.chooseOriginDestination") }}
                        </h2>
                        <feature :pricing="pricing" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        const title = this.$t("page.booking");
        const desc = this.$t("booking.chooseOriginDestination");
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

        return {
            pricing,
        };
    },
};
</script>
