<template>
    <div>
        <h3 class="subtitle is-5 mb-3">
            {{ $t("booking.goodsTitle") }}
        </h3>
        <div class="card">
            <div class="card-header">
                <div class="card-header-title">
                    {{ $t("booking.goodsDesc") }}
                </div>
            </div>
            <div class="card-content">
                <div class="columns is-multiline">
                    <div class="column is-half">
                        <base-input-text
                            ref="type"
                            v-model="model.type"
                            :required="true"
                            type="text"
                            :title="$t('booking.goodsType')"
                            placeholder="Ex: Chemical"
                        />
                    </div>
                    <div class="column is-half">
                        <base-input-number
                            ref="count"
                            v-model="model.count"
                            :required="true"
                            :value="1"
                            :title="$t('booking.goodsCount')"
                        />
                    </div>
                    <div class="column is-3">
                        <base-input-number
                            ref="weight"
                            v-model="model.weight"
                            :required="true"
                            :disabled="value.disableWeight"
                            :value="1"
                            :title="$t('booking.weight')"
                        />
                    </div>
                    <div class="column is-3">
                        <base-input-number
                            ref="length"
                            v-model="model.length"
                            :required="true"
                            :disabled="value.disableVolume"
                            :value="1"
                            :title="$t('booking.length')"
                        />
                    </div>
                    <div class="column is-3">
                        <base-input-number
                            ref="width"
                            v-model="model.width"
                            :required="true"
                            :disabled="value.disableVolume"
                            :value="1"
                            :title="$t('booking.width')"
                        />
                    </div>
                    <div class="column is-3">
                        <base-input-number
                            ref="height"
                            v-model="model.height"
                            :required="true"
                            :disabled="value.disableVolume"
                            :value="1"
                            :title="$t('booking.height')"
                        />
                    </div>
                    <div class="column is-12">
                        <base-textarea
                            ref="info"
                            v-model="model.info"
                            :title="$t('booking.additionalInfo')"
                            :placeholder="$t('booking.additionalInfo')"
                        />
                    </div>
                </div>
                <div class="buttons flex-end">
                    <button class="button" @click="openTabContent(1)">
                        {{ $t("util.previous") }}
                    </button>
                    <button class="button is-info" @click="bookNow">
                        {{ $t("util.bookNow") }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Object,
            required: true,
        },
    },
    methods: {
        openTabContent(id) {
            this.$utils.openTabContent(id);
        },
        valid() {
            return (
                this.$refs.type.valid() &&
                this.$refs.count.valid() &&
                this.$refs.weight.valid() &&
                this.$refs.length.valid() &&
                this.$refs.width.valid() &&
                this.$refs.height.valid() &&
                this.$refs.info.valid()
            );
        },
        validate() {
            this.$refs.type.validate();
            this.$refs.count.validate();
            this.$refs.weight.validate();
            this.$refs.length.validate();
            this.$refs.width.validate();
            this.$refs.height.validate();
            this.$refs.info.validate();
        },
        bookNow() {
            this.validate();
            if (this.valid()) {
                this.$emit("booking");
            }
        },
    },
    computed: {
        model: {
            get() {
                return this.value;
            },
            set() {
                this.$emit("base", model);
            },
        },
    },
};
</script>
