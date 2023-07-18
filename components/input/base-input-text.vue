<template>
    <div class="field">
        <base-input-utils :title="title" :required="required" />
        <input
            :class="error ? 'input is-danger' : 'input'"
            :placeholder="placeholder"
            v-model="model"
            type="text"
        />
        <div v-if="error" class="has-text-danger">
            {{ $t("util.requiredText") }} {{ title.toLowerCase() }}.
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
            required: true,
        },
        value: {
            type: String,
            default: "",
        },
        type: {
            type: String,
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
    },
    methods: {
        valid() {
            if (this.required) {
                if (this.type === "text") {
                    return this.$regex.name(this.value);
                } else if (this.type === "email") {
                    return this.$regex.mail(this.value);
                } else if (this.type === "phone") {
                    return this.$regex.phone(this.value);
                }
                return true;
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
