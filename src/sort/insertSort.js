export function insertSort (arr){
  const len = arr.length
  for(let i = 0;i<len ;i++){
    let start = arr[i]
    for(let j = i-1; j>=0; j--){
      if(arr[j]>start){
        arr[j+1] = arr[j]
      }else{
        arr[j+1] = start
        break
      }
    }
  }
  return arr 
}