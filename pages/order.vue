<template>
    <div class="hero">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-7">
                        <h1 class="title">
                            {{ $t("page.order") }}
                        </h1>
                        <ul style="list-style: none">
                            <li
                                v-for="order in orders"
                                :key="order.id"
                                class="card p-5 mb-5"
                            >
                                <div class="columns">
                                    <div class="column">
                                        <h5 class="title is-4">Origin</h5>
                                        <p>
                                            <strong>Address:</strong>
                                            {{ order.origin_city }} -
                                            {{ order.origin_address }}
                                        </p>
                                    </div>
                                    <div class="column">
                                        <h5 class="title is-4">Destination</h5>
                                        <p>
                                            <strong>Address:</strong>
                                            {{ order.destination_city }} -
                                            {{ order.destination_address }}
                                        </p>
                                    </div>
                                </div>

                                <div class="columns">
                                    <div class="column">
                                        <h5 class="title is-4">
                                            Sender Information
                                        </h5>
                                        <p>
                                            <strong>Name:</strong>
                                            {{ order.sender_name }}
                                        </p>
                                        <p>
                                            <strong>Address:</strong>
                                            {{ order.origin_city }} -
                                            {{ order.origin_address }}
                                        </p>
                                    </div>
                                    <div class="column">
                                        <h5 class="title is-4">
                                            Receiver Information
                                        </h5>
                                        <p>
                                            <strong>Name:</strong>
                                            {{ order.receiver_name }}
                                        </p>
                                        <p>
                                            <strong>Address:</strong>
                                            {{ order.destination_city }} -
                                            {{ order.destination_address }}
                                        </p>
                                    </div>
                                </div>

                                <h5 class="title is-4">Goods Information</h5>
                                <p>
                                    <strong>Type:</strong>
                                    {{ order.goods_type }}
                                    {{ order.goods_info }}
                                </p>
                            </li>
                        </ul>
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
            orders: [],
        };
    },
    mounted() {
        this.fetchOrders();
    },
    methods: {
        fetchOrders() {
            axios
                .get("/api/order")
                .then((response) => {
                    this.orders = response.data.data;
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    },
};
</script>
