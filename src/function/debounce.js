export function debounce(callback,delay) {
  return function (event) {
    if (callback.hasOwnProperty('timeId')) {
      clearTimeout(callback.timeId)
    }
    callback.timeId = setTimeout(() => {
      callback.call(this,event)
    }, delay)
  }
}