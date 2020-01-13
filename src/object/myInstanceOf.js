/* 2. 自定义instanceof工具函数
  语法: myInstanceOf(obj, Type)
  功能: 判断obj是否是Type类型的实例
  实现: Type的原型对象是否是obj的原型链上的某个对象, 如果是返回tru, 否则返回false
*/

export function myInstanceOf (obj, Type){
  let protoObj = obj.__proto__
  while(protoObj !== null){
    if(protoObj === Type.prototype){
      return true
    }
    protoObj = protoObj.__proto__
  }
  return false
}