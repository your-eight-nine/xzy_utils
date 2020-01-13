// 2. merge(arr1, arr2): 将arr2与arr1的元素进行合并组成一个新的数组(不改变原数组)
// 如: merge([1,3,5,7,5], [1, 5, 8]) ==> [1, 3, 5, 7, 5, 8]

export function merge (arr1,arr2){
  const result = [...arr1]
  arr2.forEach(item => {
    if(arr1.indexOf(item) === -1){
      result.push(item)
    }
  })
  return result
}