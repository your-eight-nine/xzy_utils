/* 1. difference(arr1, arr2): 得到当前数组中所有不在arr中的元素组成的数组(不改变原数组)
如: difference([1,3,5,7], [5, 8])  ==> [1, 3, 7] */
import {filter} from './delcares.js'

export function difference (arr1,arr2){
  if(arr1.length === 0){
    return []
  }else if(arr2.length === 0){
    return [...arr1]
  }
  return filter(arr1,item => arr2.indexOf(item) === -1)
}

export function differences (arr1,...arr2){
  if(arr1.length === 0){
    return []
  }else if(arr2.length === 0){
    return [...arr1]
  }
  return filter(arr1,item => {
    arr2.forEach(arr => {
      arr.indexOf(item) === -1
    })
  })
}