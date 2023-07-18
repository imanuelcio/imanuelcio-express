<template>
    <div class="card">
        <div class="columns is-gapless is-centered">
            <div class="column">
                <div class="card-content">
                    <div class="tabs">
                        <ul>
                            <li
                                class="is-active"
                                tab-menu="0"
                                @click="openTabContent(0)"
                            >
                                <a>
                                    {{ $t("rates.title") }}
                                </a>
                            </li>
                            <li tab-menu="1" @click="openTabContent(1)">
                                <a>
                                    {{ $t("track.title") }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="tabs-content">
                        <div class="is-active" tab-content="0">
                            <feature-rates :pricing="pricing" />
                        </div>
                        <div tab-content="1">
                            <feature-track />
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
    methods: {
        openTabContent(id) {
            this.$utils.openTabContent(id);
        },
    },
};
</script>
