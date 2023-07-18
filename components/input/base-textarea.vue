<template>
    <div class="field">
        <base-input-utils :title="title" :required="required" />
        <textarea
            :class="error ? 'textarea is-danger' : 'textarea'"
            :placeholder="placeholder"
            v-model="model"
        />
        <div class="level">
            <div class="level-left">
                <span v-if="error" class="has-text-danger">
                    {{ $t("util.requiredTextArea") }}
                </span>
            </div>
            <span class="level-right">
                <span>{{ value.length }}/200</span>
            </span>
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
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
        },
    },
    methods: {
        valid() {
            if (this.required) {
                return this.$regex.text(this.value);
            }
            return true;
        },
        validate() {
            this.error = !this.valid();
        },
        clear() {
            this.error = false;
            this.value = "";
        },
    },
    computed: {
        model: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            },
        },
    },
};
</script>
