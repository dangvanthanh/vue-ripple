/**
 * Ripple
 * Adapted from vanilla material design ripples: https://github.com/samthor/rippleJS
 */
export function startRipple (type, event) {
  let holder = event.target

  if (!holder.classList.contains('ripple-js')) {
    return false
  }

  let prev = holder.getAttribute('data-event')
  if (prev && prev !== type) {
    return false
  }

  holder.setAttribute('date-event', type)

  let rect = holder.getBoundingClientRect()
  let x = event.offsetX
  let y

  if (!x) {
    x = event.offsetY
  } else {
    x = event.clientX - rect.left
    y = event.clientY - rect.top
  }

  let ripple = document.createElement('div')
  let max

  if (rect.width === rect.height) {
    max = rect.width * 1.412
  } else {
    max = Math.sqrt(rect.width * rect.width + rect.height * rect.height)
  }

  let dim = `${max * 2}px`
  ripple.style.width = dim
  ripple.style.height = dim
  ripple.style.marginLeft = `${-max + x}px`
  ripple.style.marginTop = `${-max + y}px`
  ripple.className = 'ripple'
  holder.appendChild(ripple)
  window.setTimeout(function () {
    ripple.classList.add('held')
  }, 0)

  let releaseEvent = (type === 'mousedown' ? 'mouseup' : 'touchend')
  var release = function (ev) {
    document.removeEventListener(releaseEvent, release)
    ripple.classList.add('done')

    window.setTimeout(function () {
      holder.removeChild(ripple)
      if (!holder.children.length) {
        holder.classList.remove('active')
        holder.removeAttribute('data-event')
      }
    }, 700)
  }

  document.addEventListener(releaseEvent, release)
}

export function handleMouseDown (ev) {
  if (ev.button === 0) {
    startRipple(ev.type, ev)
  }
}

export function handleTouchStart (ev) {
  if (ev.changedTouches) {
    for (let i = 0, len = ev.changedTouches.length; i < len; i++) {
      startRipple(ev.type, ev.changedTouches[i])
    }
  }
}
