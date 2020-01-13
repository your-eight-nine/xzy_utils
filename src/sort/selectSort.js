export function selectSort (arr){
  const len = arr.length
  for(let i = 0;i < len -1;i++){
    let minIndex = i
    for(let j = i+1;j < len;j++){
      if(arr[minIndex] > arr[j]){
        minIndex = j
      }
    }
    if(minIndex !== i){
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}