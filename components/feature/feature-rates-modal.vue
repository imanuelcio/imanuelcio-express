<template>
    <div class="content notification">
        <button class="delete" @click="remove"></button>
        <h4>{{ $t("rates.title") }}</h4>
        <div class="columns">
            <div class="column is-half">
                {{ $t("util.origin") }}
                <h5 class="mb-0">
                    {{ data.origin }}
                </h5>
            </div>
            <div class="column is-half">
                {{ $t("util.destination") }}
                <h5 class="mb-0">
                    {{ data.destination }}
                </h5>
            </div>
        </div>
        <table-price :data="data" />
        <div class="columns is-mobile">
            <div class="column">
                <button class="button is-fullwidth mt-5" @click="contact">
                    {{ $t("util.contactCS") }}
                </button>
            </div>
            <div class="column">
                <button
                    class="button is-info is-fullwidth mt-5"
                    @click="booking"
                >
                    {{ $t("util.bookNow") }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: Object,
        required: true,
    },
    methods: {
        booking() {
            this.$router.push(this.localePath(`/booking/${this.data.code}`));
            this.remove();
        },
        contact() {
            window.open(`https://wa.me/${process.env.WHATSAPP_ADMIN_NO}`);
            this.remove();
        },
        remove() {
            this.$modal.popPrice();
        },
    },
};
</script>
