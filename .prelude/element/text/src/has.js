function has (children) {
  return !!children?.some?.(Boolean)
}

export default has
