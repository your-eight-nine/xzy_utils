export function PriorityQueue(){
  const arr = []
  
  function QueueElement(data,priority){
    this.data= data
    this.priority = priority
  }

  this.enqueue = function (data,priority){
    if(priority<0 ||priority >100){
      throw new Error('优先级值必须在0到100之间')
    }

    const element = new QueueElement(data,priority)

    if(arr.length === 0){
      arr.push(element)
    }else{
      for(let index = 0;index < arr.length; index ++){
        if(arr[index].priority > priority){
          arr.splice(index,0,element)
          return
        }
      }
      arr.push(element)
    }
  }
  this.dequeue = function (){
    return arr.shift()
  }
  this.front = function (){
    return arr[0]
  }
  this.size= function (){
    return arr.length
  }
  this.isEmpty = function (){
    return arr.length === 0
  }
}