
function updateObjectWithKeyAndValue(object,key,value){
  var new ={};
  Objects.assign(new, object, {[key]: value})
  return new
}
