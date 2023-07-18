export default (context, inject) => {
    const method = {
        addNotif(message, fixed) {
            const index = new Date().getMilliseconds();
            context.store.commit("addNotif", { message, index });
            if (!fixed) {
                setTimeout(() => {
                    context.store.commit("popNotif", index);
                }, 5000);
            }
        },
        popNotif(index) {
            context.store.commit("popNotif", index);
        },
        addPrice(params) {
            context.store.commit("addPrice", params);
        },
        popPrice() {
            context.store.commit("popPrice");
        },
        addImage(src, alt) {
            context.store.commit("addImage", { src, alt });
        },
        popImage() {
            context.store.commit("popImage");
        }
    }

    inject("modal", method);
}
