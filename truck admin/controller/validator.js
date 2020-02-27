function namevalidation(name){

name=name.trim();
  if(name==null){
return false;}
else if (name.search(/[^A-Za-z\s]/)) {
return false;
}else{
  return true;
}

}


phonenumbervalidation(number){
  number=number.trim();
}

vehiclenumbervalidation(){}
vehicledetailvalidation(){}





module.exports={
namevalidation:namevalidation,
phonenumbervalidation:phonenumbervalidation,
vehiclenumbervalidation:vehiclenumbervalidation,
vehicledetailvalidation:vehicledetailvalidation

}
