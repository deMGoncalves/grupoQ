export default new Proxy({}, {
  get (_target, key) {
    const value = localStorage.getItem(key)
    return value
      ? JSON.parse(value)
      : undefined
  },

  set (_target, key, value) {
    return localStorage.setItem(key, JSON.stringify(value)), true
  }
})
