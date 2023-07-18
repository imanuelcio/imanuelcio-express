<template>
    <div class="table-container">
        <table class="table is-fullwidth is-bordered is-striped">
            <thead>
                <tr>
                    <th>
                        {{ $t("util.pricePerKG") }}
                    </th>
                    <th>
                        {{ $t("util.pricePerM3") }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {{ formatRupiah(data.price) }}
                    </td>
                    <td>
                        {{ formatRupiah(data.volume) }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
    methods: {
        formatRupiah(number) {
            return this.$utils.formatRupiah(number);
        },
    },
};
</script>
