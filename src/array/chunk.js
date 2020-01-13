export function chunk (array, size = 1) {
  const bigArr = []
  let smallArr = []
  if(array.length === 0){
    return bigArr
  }
  if(size < 1){
    size = 1
  }else if(size > array.length){
    size = array.length
  }
  array.forEach(item => {
    if (smallArr.length === 0) {
      bigArr.push(smallArr)
    }
    smallArr.push(item)
    if(smallArr.length === size){
      smallArr = []
    }
  })
  return bigArr
}