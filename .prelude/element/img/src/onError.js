function onError (e) {
  e.target.style.color = 'transparent'
  e.target.src = 'fallback_1x1.png'
}

export default onError
