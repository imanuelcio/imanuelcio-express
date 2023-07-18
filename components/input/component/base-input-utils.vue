<template>
    <label class="label">
        <span>{{ title }}</span>
        <span class="has-text-danger">{{ required ? "*" : "" }}</span>
    </label>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: false,
        },
        required: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
