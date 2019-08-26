'use strict'

function Classie() {
  function classReg(className) {
    return new RegExp('(^|\\s+)' + className + '(\\s+|$)')
  }

  var hasClass, addClass, removeClass

  if ('classList' in document.documentElement) {
    hasClass = function(elem, c) {
      return elem.classList.contains(c)
    }
    addClass = function(elem, c) {
      elem.classList.add(c)
    }
    removeClass = function(elem, c) {
      elem.classList.remove(c)
    }
  } else {
    hasClass = function(elem, c) {
      return classReg(c).test(elem.className)
    }
    addClass = function(elem, c) {
      if (!hasClass(elem, c)) {
        elem.className = elem.className + ' ' + c
      }
    }
    removeClass = function(elem, c) {
      elem.className = elem.className.replace(classReg(c), ' ')
    }
  }

  return {
    has: hasClass,
    add: addClass,
    remove: removeClass
  }
}

(function() {
  var classie = Classie()
  var overlay = document.querySelector('.md-overlay')
  var array = []
  array.slice.call(document.querySelectorAll('.md-trigger')).forEach(function(el, i) {
    var modal = document.querySelector('#' + el.getAttribute('data-modal'))
    var close = modal.querySelector('.md-close')

    function removeModal(hasPerspective) {
      classie.remove(modal, 'md-show')

      if (hasPerspective) {
        classie.remove(document.documentElement, 'md-perspective')
      }
    }

    function removeModalHandler() {
      $('.navbar').show()
      removeModal(classie.has(el, 'md-setperspective'))
    }

    el.addEventListener('click', function(ev) {
      ev.stopPropagation()
      ev.preventDefault()
      $('.navbar').hide()
      classie.add(modal, 'md-show')
      overlay.removeEventListener('click', removeModalHandler)
      overlay.addEventListener('click', removeModalHandler)

      if (classie.has(el, 'md-setperspective')) {
        setTimeout(function() {
          classie.add(document.documentElement, 'md-perspective')
        }, 25)
      }
    })

    close.addEventListener('click', function(ev) {
      ev.stopPropagation()
      ev.preventDefault()
      removeModalHandler()
    })
  })
})()
