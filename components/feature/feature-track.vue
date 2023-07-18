<template>
    <div>
        <h3 class="mb-4">
            {{ $t("track.title") }}
        </h3>
        <div class="columns">
            <div class="column is-12">
                {{ $t("track.message") }}
                <h4 class="mt-2 mb-0">
                    <a :href="`tel:${cs}`">{{ cs }}</a>
                </h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cs: `+${process.env.WHATSAPP_ADMIN_NO}`,
        };
    },
};
</script>
