export default (_, inject) => {
    const utils = {
        capitalize(value) {
            return value.replace(/(?:^|\s|-)\S/g, x => x.toUpperCase());
        },
        timeread(value) {
            return `${Math.ceil(JSON.stringify(value).split(" ").length / 130)} min read`
        },
        formatDate(date, full) {
            var option = (full) ? { year: "numeric", month: "long", day: "numeric" } : { month: "long", day: "numeric" };
            return new Date(date).toLocaleDateString("id", option);
        },
        formatRupiah(number) {
            return new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR"
            }).format(number);
        },
        openTabContent(id) {
            document
                .querySelectorAll("li[tab-menu]")
                .forEach((el) => el.classList.remove("is-active"));
            document
                .querySelector(`li[tab-menu='${id}']`)
                .classList.add("is-active");
            document
                .querySelectorAll("div[tab-content]")
                .forEach((el) => el.classList.remove("is-active"));
            document
                .querySelector(`div[tab-content='${id}']`)
                .classList.add("is-active");
        },
    }

    inject("utils", utils)
}
