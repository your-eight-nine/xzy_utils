import {reduce,some} from './delcares'
import {concat} from './concat'
export function flatten1(array) {
  return reduce(array,(pre,item) => {
    if (!Array.isArray(item)) {
      pre.push(item)
    }else{
      pre = concat(pre,flatten1(item))
    }
    return pre
  },[])
}

export function flatten2(array) {
  let arr = concat([],...array)
  while (some(arr,item => Array.isArray(item))) {
    arr = concat([],...arr)
  }
  return arr
}