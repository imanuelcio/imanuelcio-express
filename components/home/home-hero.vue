<template>
    <div class="hero-wrap">
        <div class="hero is-medium is-dark">
            <div class="hero-body">
                <div class="container">
                    <div class="columns items-center">
                        <div class="column is-5">
                            <div class="subtitle">
                                <span class="has-text-weight-bold">
                                    {{ $t("home.gretting") }}
                                </span>
                            </div>
                            <h1 class="title has-text-weight-bold">
                                {{ $t("title") }}
                            </h1>
                            <h2 class="subtitle has-text-weight-bold is-4 mt-4">
                                {{ $t("home.description") }}
                            </h2>
                        </div>
                        <div class="column is-7">
                            <feature :pricing="pricing" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        pricing: {
            type: Array,
            required: true,
        },
    },
};
</script>
