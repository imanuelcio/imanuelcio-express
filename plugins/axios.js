export default (context, inject) => {
    const api = {
        searchCity(searchTerm) {
            return context.$axios.$get(`${process.env.SERVER_API}/api/v1/kotakabupaten?nama_kota_kab=${searchTerm}`)
        },
    }

    inject("api", api)
}
