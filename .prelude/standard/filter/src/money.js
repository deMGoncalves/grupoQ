function money (_target, _prop, descriptor) {
  const next = descriptor.get
  Object.assign(descriptor, {
    get () {
      const value = Reflect.apply(next, this, [])
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
    }
  })
}

export default money
