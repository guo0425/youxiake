if (!localStorage.getItem('cityName')) {
    localStorage.setItem('cityName', '北京')
}
const state = {
    city: localStorage.getItem('cityName')
}
export default state