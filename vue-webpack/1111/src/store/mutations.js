const mutations = {
    changeCity(state, val) {
        state.city = val
        localStorage.setItem('cityName', val)
    }
}
export default mutations