// console.log(module)

let today = new Date()

exports.getDate = function() {
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  }
  return today.toLocaleDateString('en-US', options)
}

exports.getDay = function () {
  let options = {
    weekday: 'long',
  }
  return today.toLocaleDateString('en-US', options)
}

exports.getYear = function () {
  let options = {
    weekday: 'long',
  }
  return today.toLocaleDateString('en-US', options)
}

// console.log(module.exports)
