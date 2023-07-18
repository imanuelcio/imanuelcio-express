export default (_, inject) => {
    const regex = {
        name(val) {
            return /^(?=.{3,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/.test(val);
        },
        mail(val) {
            return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val);
        },
        text(val) {
            return /^[\w\W\s]{10,200}$/.test(val);
        },
        phone(val) {
            return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/.test(val);
        },
        number(val) {
            return /^\d+$/.test(val);
        }
    }

    inject("regex", regex)
}
