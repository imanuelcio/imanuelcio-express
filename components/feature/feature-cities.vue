<template>
    <v-select
        :options="options"
        v-model="model"
        :placeholder="placeholder"
        class="input p-0 b-0"
    >
        <template v-slot:no-options="{ search, searching }">
            <div v-if="searching" class="light p-2">
                {{ $t("util.noResult") }} {{ search }}
            </div>
            <div v-else class="light p-2">
                {{ $t("util.startTyping") }}
            </div>
        </template>
    </v-select>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            required: false,
        },
        options: {
            type: Array,
            required: true,
        },
        value: {
            type: String,
            default: "",
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
