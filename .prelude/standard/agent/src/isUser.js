import isBot from './isBot'

function isUser () {
  return !isBot()
}

export default isUser

