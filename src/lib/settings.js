
let store = {
  token: localStorage.getItem('token')
}

export default {
  login (token) {
    store.token = token
    localStorage.setItem('token', token)
  },
  logout () {
    store = {}
    localStorage.removeItem('token')
  },
  get (key) {
    return store[key]
  }
}
