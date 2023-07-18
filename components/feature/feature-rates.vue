<template>
    <div>
        <h3 class="bold mb-4">
            {{ $t("rates.title") }}
        </h3>
        <div class="columns is-multiline mb-0">
            <div class="column is-5">
                <feature-cities
                    v-model="cities.origin"
                    :placeholder="$t('rates.origin')"
                    :options="getCities(true)"
                />
                <span>{{ $t("rates.originDesc") }}</span>
            </div>
            <div class="column is-5">
                <feature-cities
                    v-model="cities.destination"
                    :placeholder="$t('rates.destination')"
                    :options="getCities(false)"
                />
                <span>{{ $t("rates.destinationDesc") }}</span>
            </div>
            <div class="column is-2">
                <button class="button is-fullwidth is-info" @click="getPrices">
                    {{ $t("rates.check") }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            result: {},
            cities: {
                origin: "",
                destination: "",
            },
        };
    },
    props: {
        pricing: {
            type: Array,
            required: true,
        },
    },
    methods: {
        getPrices() {
            if (
                this.cities.origin.length > 0 &&
                this.cities.destination.length > 0
            ) {
                const result = this.pricing.find(
                    (item) =>
                        item.origin == this.cities.origin &&
                        item.destination == this.cities.destination
                );

                this.$modal.addPrice(result);
            } else {
                this.$modal.addNotif(this.$t("util.requiredCity"), true);
            }
        },
        getCities(origin) {
            const cities = [];
            this.pricing.map((item) => {
                if (origin) {
                    if (!cities.includes(item.origin)) {
                        cities.push(item.origin);
                    }
                } else {
                    if (!cities.includes(item.destination)) {
                        cities.push(item.destination);
                    }
                }
            });
            return cities;
        },
    },
};
</script>
