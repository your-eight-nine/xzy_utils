function Stack(){
  const arr = []
  this.push = function (element){
    arr.push(element)
  }
  this.pop = function (){
    return arr.pop()
  }
  this.peek = function (){
    return arr[arr.length-1]
  }
  this.size= function (){
    return arr.length
  }
  this.isEmpty = function (){
    return arr.length === 0
  }

}
export default Stack