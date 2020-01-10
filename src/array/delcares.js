export function map (array,callback) {
  console.log('map--');
  const arr = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const result = callback(element,index)
    arr.push(result)
  }
  return arr
}

export function reduce (array,callback,initValue) {
  let total = initValue
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    total = callback(total,element,index)
  }
  return total
}

export function filter (array,callback) {
  const arr = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const result = callback(element,index)
    if (result) {
      arr.push(element)
    }
  }
  return arr
}

export function find (callback) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const result = callback(element,index)
    if (result) {
      return element
    }
  }
  return undefined
}

export function findIndex (callback) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const result = callback(element,index)
    if (result) {
      return index
    }
  }
  return -1
}

export function every (callback) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const result = callback(element,index)
    if (!result) {
      return false
    }
  }
  return true
}

export function some (callback) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const result = callback(element,index)
    if (result) {
      return true
    }
  }
  return false
}