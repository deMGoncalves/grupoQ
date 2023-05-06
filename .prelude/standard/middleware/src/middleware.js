function middleware (functionRef) {
  return (ClassRef) =>
    new Proxy(
      function () {
        const instance = (this instanceof ClassRef)
          ? new ClassRef(...arguments)
          : ClassRef(...arguments)

        setImmediate(() => functionRef(instance))
        return instance
      },
      {
        get: (_target, key) => Reflect.get(ClassRef, key),
        set: (_target, key, value) => (Reflect.set(ClassRef, key, value), true)
      }
    )
}

export default middleware
