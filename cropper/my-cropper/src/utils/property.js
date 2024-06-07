// -防抖
let debounce_timer = null
function debounce(cb, wait) {
  const delay = wait || 1000
  return function () {
    const args = arguments
    if (debounce_timer) {
      clearTimeout(debounce_timer)
    }
    debounce_timer = setTimeout(() => {
      cb.apply(this, args)
      debounce_timer = null
    }, delay)
  }
}

// -节流
let throttle_timer = null
function throttle(fn, wait) {
  const delay = wait || 1000
  return function () {
    if (throttle_timer) {
      return
    }
    throttle_timer = setTimeout(() => {
      fn.apply(this, arguments)
      throttle_timer = null
    }, delay)
  }
}

export { debounce, throttle }
