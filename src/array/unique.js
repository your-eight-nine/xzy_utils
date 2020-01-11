/* 方法1: 利用forEach()和indexOf()
               说明: 本质是双重遍历, 效率差些
方法2: 利用forEach() + 对象容器
        说明: 只需一重遍历, 效率高些
方法3: 利用ES6语法: from + Set 或者 ... + Set
        说明: 编码简洁 */
export function unique1(array) {
  const arr = []
  array.forEach(item => {
    if (arr.indexOf(item) === -1) {
      arr.push(item)
    }
  })
  return arr
}

export function unique2 (array) {
  const arr = []
  const container = {}
  array.forEach(item => {
    if (!container.hasOwnProperty(item)) {
      arr.push(item)
      container[item] = true
    }
  })
  return arr
}

export function unique3 (array) {
  // return Array.from(new Set(array))
  return [...new Set(array)]
}