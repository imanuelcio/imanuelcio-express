<template>
    <div class="hero">
        <div class="hero-body">
            <div class="container">
                <div class="level is-mobile">
                    <div class="level-left">
                        <div class="level-item">
                            <h4 class="m-0">{{ $t("home.article") }}</h4>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <nuxt-link
                                :to="localePath(`/article`)"
                                class="has-text-weight-medium"
                            >
                                {{ $t("util.seeAll") }}
                            </nuxt-link>
                        </div>
                    </div>
                </div>
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
    props: {
        articles: {
            type: Array,
            required: true,
        },
    },
};
</script>
