export const state = () => ({
    notif: [],
    price: [],
    image: [],
})

function toggleModal(show) {
    Array.from(document.getElementsByClassName("modal")).forEach((el) => {
        show ? el.classList.add("is-active") : el.classList.remove("is-active")
    })
}

export const mutations = {
    addNotif(state, params) {
        state.notif.push({ message: params.message, index: params.index })
        if (state.notif.length > 0 && process.client) {
            toggleModal(true)
        }
    },
    popNotif(state, index) {
        const indexToRemove = state.notif.findIndex(i => i.index === index)
        if (indexToRemove !== -1) {
            state.notif.splice(indexToRemove, 1)
        }
        if (state.notif.length < 1 && process.client) {
            toggleModal(false)
        }
    },
    addPrice(state, params) {
        state.price.push(params)
        if (params && process.client) {
            toggleModal(true)
        }
    },
    popPrice(state) {
        state.price = []
        if (process.client) {
            toggleModal(false)
        }
    },
    addImage(state, params) {
        state.image.push(params)
        if (params && process.client) {
            toggleModal(true)
        }
    },
    popImage(state) {
        state.image = []
        if (process.client) {
            toggleModal(false)
        }
    },
}
