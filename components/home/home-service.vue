<template>
    <div class="hero">
        <div class="hero-body">
            <div class="container">
                <h4>{{ $t("home.service") }}</h4>
                <div v-if="services.length < 1">
                    {{ $t("util.empty") }}
                </div>
                <div v-else class="columns is-multiline">
                    <div
                        v-for="service in services"
                        :key="service.title"
                        class="column is-half"
                    >
                        <div class="card">
                            <div class="card-content">
                                <div class="columns">
                                    <div class="column is-3">
                                        <div
                                            v-if="
                                                service.image &&
                                                service.image.length == 1
                                            "
                                        >
                                            <img
                                                :src="service.image[0].url"
                                                class="image is-fullwidth"
                                                :alt="service.title"
                                            />
                                        </div>
                                    </div>
                                    <div class="column is-9">
                                        <h5 class="line-clamp-1">
                                            {{ service.title }}
                                        </h5>
                                        <p class="line-clamp-3">
                                            {{ service.description }}
                                        </p>
                                    </div>
                                </div>
                            </div>
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
        services: {
            type: Array,
            required: true,
        },
    },
};
</script>
