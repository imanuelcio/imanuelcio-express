<template>
    <div class="hero">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-7">
                        <h1 class="title">{{ page.title }}</h1>
                        <h2 class="subtitle is-5 pt-1 light">
                            {{ page.description }}
                        </h2>
                        <div class="level is-mobile">
                            <div class="level-left">
                                <div class="level-item">
                                    <b>{{ page.author }}</b>
                                </div>
                                <div class="level-item">
                                    {{ timeRead(block) }}
                                </div>
                            </div>
                        </div>
                        <div
                            v-if="page.image && page.image.length == 1"
                            class="mb-5"
                        >
                            <img
                                :src="page.image[0].url"
                                class="image is-fullwidth"
                                :alt="page.title"
                            />
                        </div>
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
        const title = this.page.title;
        const desc = this.page.description;
        const image =
            this.page.image && this.page.image.length == 1
                ? this.page.image[0].url
                : process.env.IMAGE;
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
    async asyncData({ $notion, params }) {
        const table = await $notion.getPageTable(process.env.NOTION_ARTICLE_ID);
        const page = table.find((item) => item.slug === params.slug);
        const block = await $notion.getPageBlocks(page.id);

        return {
            page,
            block,
        };
    },
    methods: {
        timeRead(value) {
            return this.$utils.timeread(value);
        },
        formatDate(value) {
            return this.$utils.formatDate(value, true);
        },
        observeHTMLTable() {
            Array.from(document.getElementsByTagName("table")).forEach((el) => {
                el.classList.add("table");
                el.classList.add("is-bordered");
                el.classList.add("is-striped");
            });
        },
    },
    mounted() {
        this.observeHTMLTable();
    },
};
</script>
