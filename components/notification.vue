<template>
    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="section container">
                <div class="columns is-multiline">
                    <div
                        v-if="this.$store.state.price.length > 0"
                        class="column is-12"
                    >
                        <div
                            v-for="item in this.$store.state.price"
                            :key="makeRandomID(item)"
                        >
                            <feature-rates-modal :data="item" />
                        </div>
                    </div>
                    <div
                        v-if="this.$store.state.notif.length > 0"
                        class="column is-12"
                    >
                        <div
                            v-for="item in this.$store.state.notif"
                            :key="item.index"
                            class="column is-12"
                        >
                            <div class="notification">
                                <p>{{ item.message }}</p>
                                <div class="buttons flex-end mt-6">
                                    <button
                                        class="button is-info"
                                        @click="removeNotif(item.index)"
                                    >
                                        {{ $t("util.understand") }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        v-if="this.$store.state.image.length > 0"
                        class="column is-12"
                    >
                        <div
                            v-for="item in this.$store.state.image"
                            :key="makeRandomID(item)"
                        >
                            <div class="image is-4by3">
                                <img :src="item.src" :alt="item.alt" />
                            </div>
                            <button
                                class="modal-close is-large"
                                @click="removeImage"
                            ></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        removeNotif(index) {
            this.$modal.popNotif(index);
        },
        removeImage() {
            this.$modal.popImage();
        },
        makeRandomID() {
            return Math.random();
        },
    },
};
</script>
