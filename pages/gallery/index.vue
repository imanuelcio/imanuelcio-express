<template>
    <div class="hero">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">{{ $t("page.gallery") }}</h1>
                <h2 class="subtitle is-5 pt-1 light">
                    {{ $t("util.galleryDesc") }}
                </h2>
                <div v-if="galleries.length < 1">
                    {{ $t("util.empty") }}
                </div>
                <div v-else class="columns is-multiline">
                    <div
                        v-for="gallery in galleries"
                        :key="makeRandomID(gallery)"
                        class="column is-3"
                    >
                        <gallery-card :gallery="gallery" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        const title = this.$t("page.gallery");
        const desc = this.$t("util.galleryDesc");
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
        const table = await $notion.getPageTable(process.env.NOTION_GALLERY_ID);
        const galleries = table
            .sort((a, b) => a.date - b.date)
            .filter((item) => item.active);

        return {
            galleries,
        };
    },
    methods: {
        makeRandomID() {
            return Math.random();
        },
    },
};
</script>
