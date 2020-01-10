import call from './call'
export function bind (fn,obj,...args) {
  // 返回一个新数组
  return (...args2) => {
    //调用原来的数组,指定this为obj,参数列表由args和args2组成
    return call(fn,obj, ...args, ...args2)
  }
}