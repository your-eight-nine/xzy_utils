export function deepClone1 (target){
  return JSON.parse(JSON.stringify(target))
}

export function deepClone2 (target) {
  if (target instanceof Array || (target!==null && typeof target==='object')) {
    const cloneTarget = target instanceof Array ? [] : {}
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        cloneTarget[key] = deepClone2(target[key])  // 对属性值进行递归处理
      }
    }
    return cloneTarget
  } else {
    return target
  }
}

export function deepClone3 (target, map = new Map()) {
  if (target instanceof Array || (target!==null && typeof target==='object')) {
    let cloneTarget = map.get(target)
    if(cloneTarget){
      return cloneTarget
    }
    cloneTarget = target instanceof Array ? [] : {}
    map.set(target, cloneTarget)
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        cloneTarget[key] = deepClone3(target[key])  // 对属性值进行递归处理
      }
    }
    return cloneTarget
  } else {
    return target
  }
}

