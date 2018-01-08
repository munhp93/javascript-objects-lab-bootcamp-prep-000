var recipes={};
function updateObjectWithKeyAndValue(object,key,value){
  var ne ={};
  Object.assign(ne, object, {[key]: value})
  return object
}
