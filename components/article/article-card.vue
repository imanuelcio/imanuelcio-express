<template>
    <nuxt-link :to="localePath(`/article/${article.slug}`)" class="card">
        <div class="card">
            <div
                v-if="article.image && article.image.length == 1"
                class="card-image"
            >
                <img
                    :src="article.image[0].url"
                    class="image is-5by3 pt-0"
                    :alt="article.title"
                />
            </div>
            <div class="card-content">
                <h5 class="line-clamp-1">
                    {{ article.title }}
                </h5>
                <p class="line-clamp-2 mb-0">
                    {{ article.description }}
                </p>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        article: {
            type: Object,
            required: true,
        },
    },
    methods: {
        formatDate(date) {
            return this.$utils.formatDate(date, true);
        },
    },
};
</script>
