export function insertSort (arr){
  const len = arr.length
  for(let i = 1;i<len ;i++){
    let start = arr[i]
    // let j
    // for(j = i-1; j>=0; j--){
    //   if(arr[j]>start){
    //     arr[j+1] = arr[j]
    //   }else{
    //     break
    //   }
    // }
    // arr[j+1] = start

    let j = i-1
    while(j>=0 && arr[j] > start){
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = start
  }
  return arr 
}