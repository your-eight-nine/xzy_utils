/* 
实现浅拷贝
        方法一: 利用ES6语法
        方法二: 利用ES5语法: for...in
*/


export function clone1 (target){
  if(target instanceof Array){
    // return [...target]
    // return target.splice()
    // return [].concat(target)
    // return Array.from(target)
    // return target.filter(item => true)
    // return target.map(item => item)
    return target.reduce((pre,item) => {
      pre.push(item)
      return pre
    },[])
  }else if(target !== null && typeof target === 'object'){
    return {...target}
  }else{
    return target
  }
}

export function clone2 (target) {
  if(target instanceof Array || (target !== null && typeof target === 'object')){
    const cloneTarget = target instanceof Array ? [] : {}
    for(const key in target){
      if(target.hasOwnProperty(key)){
        cloneTarget[key] = target[key]
      }
    }
    return cloneTarget
  }else{
    return target
  }
}