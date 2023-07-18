<template>
    <div>
        <h3 class="subtitle is-5 mb-3">
            {{ $t("booking.senderTitle") }}
        </h3>
        <div class="card">
            <div class="card-header">
                <div class="card-header-title">
                    {{ $t("booking.senderDesc") }}
                </div>
            </div>
            <div class="card-content">
                <div class="columns is-multiline">
                    <div class="column is-4">
                        <base-input-text
                            ref="name"
                            v-model="model.name"
                            :required="true"
                            type="text"
                            :title="$t('booking.completeName')"
                            placeholder="Ex: John Doe"
                        />
                    </div>
                    <div class="column is-4">
                        <base-input-text
                            ref="email"
                            v-model="model.email"
                            :required="true"
                            type="email"
                            :title="$t('booking.emailAddress')"
                            placeholder="Ex: johndoe@gmail.com"
                        />
                    </div>
                    <div class="column is-4">
                        <base-input-text
                            ref="phone"
                            v-model="model.phone"
                            :required="true"
                            type="phone"
                            :title="$t('booking.phoneNumber')"
                            placeholder="Ex: +6281234567890"
                        />
                    </div>
                    <div class="column is-12">
                        <base-textarea
                            ref="address"
                            v-model="model.address"
                            :required="true"
                            :title="$t('booking.completeAddress')"
                            placeholder="Ex: Jl. Dukuh Kupang Timur X No. 7A, Dukuh Pakis"
                        />
                    </div>
                </div>
                <div class="buttons flex-end">
                    <button class="button is-info" @click="continueTo(1)">
                        {{ $t("util.continue") }}
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
                this.$refs.name.valid() &&
                this.$refs.email.valid() &&
                this.$refs.phone.valid() &&
                this.$refs.address.valid()
            );
        },
        validate() {
            this.$refs.name.validate();
            this.$refs.email.validate();
            this.$refs.phone.validate();
            this.$refs.address.validate();
        },
        continueTo(id) {
            this.validate();
            if (this.valid()) {
                this.openTabContent(id);
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
