<template>
    <div class="field">
        <base-input-utils :title="title" :required="required" />
        <input
            v-if="disabled"
            class="input"
            v-model="value"
            :placeholder="placeholder"
            disabled
        />
        <input
            v-else
            :class="error ? 'input is-danger' : 'input'"
            :placeholder="placeholder"
            v-model="value"
            type="number"
        />
        <div v-if="error" class="has-text-danger">
            {{ $t("util.requiredNumber") }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            error: false,
        };
    },
    props: {
        required: {
            type: Boolean,
            default: false,
        },
        value: {
            type: Number,
            default: 0,
            required: true,
        },
        title: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        valid() {
            return this.$regex.number(this.value);
        },
        validate() {
            this.error = !this.valid();
        },
        clear() {
            this.error = false;
            this.value = "";
        },
    },
    watch: {
        value() {
            this.$emit("input", this.value);
        },
    },
};
</script>
