<template>
    <div class="hero">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-10">
                        <h1 class="title">
                            {{ $t("page.booking") }}
                        </h1>
                        <h2 class="subtitle is-5 pt-1 light">
                            {{ $t("booking.description") }}
                        </h2>
                        <div class="columns is-multiline">
                            <div class="column is-7">
                                <tabs-section />
                            </div>
                            <div class="column is-7">
                                <div class="tabs-content">
                                    <div tab-content="0" class="is-active">
                                        <form-sender v-model="sender" />
                                    </div>
                                    <div tab-content="1">
                                        <form-receiver v-model="receiver" />
                                    </div>
                                    <div tab-content="2">
                                        <form-goods
                                            v-model="goods"
                                            @booking="booking"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="column is-5">
                                <h3 class="subtitle is-5 mb-3">
                                    {{ $t("booking.deliveryTitle") }}
                                </h3>
                                <div class="card">
                                    <div class="card-content">
                                        <h4 class="subtitle is-5">
                                            {{ page.origin }} →
                                            {{ page.destination }}
                                        </h4>
                                        <table-price :data="page" />
                                    </div>
                                    <div
                                        class="notification pt-2 pb-2 mb-0 cr-0"
                                    >
                                        <span class="has-text-weight-medium">
                                            {{ $t("util.ppn") }}
                                        </span>
                                    </div>
                                    <div class="card-content">
                                        <div>
                                            {{ $t("util.priceEstimate") }}
                                        </div>
                                        <h5 class="mt-1 mb-0">
                                            <a :href="`tel:${cs}`">{{ cs }}</a>
                                        </h5>
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
import axios from "axios";

export default {
    data() {
        return {
            cs: `+${process.env.WHATSAPP_ADMIN_NO}`,
            sender: {
                name: "",
                email: "",
                phone: "",
                address: "",
            },
            receiver: {
                name: "",
                phone: "",
                address: "",
            },
            goods: {
                type: "",
                count: 1,
                weight: 1,
                length: 1,
                width: 1,
                height: 1,
                info: "",
            },
        };
    },
    head() {
        const title = `${this.page.origin} → ${this.page.destination}`;
        const desc = `${this.$t("util.delivery")} ${this.$t("util.from")} ${
            this.page.origin
        } ${this.$t("util.to")} ${this.page.destination}`;
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
    async asyncData({ $notion, params }) {
        const table = await $notion.getPageTable(process.env.NOTION_PRICING_ID);
        const page = table.find((item) => item.code === params.slug);

        return {
            page,
        };
    },
    methods: {
        booking() {
            axios
                .post("/api/order", {
                    sender: this.sender,
                    receiver: this.receiver,
                    goods: this.goods,
                    origin: this.page.origin,
                    destination: this.page.destination,
                })
                .then((res) => {
                    this.$modal.addNotif(this.$t("util.successAddOrder"), true);
                    this.$router.push("/order");
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>
