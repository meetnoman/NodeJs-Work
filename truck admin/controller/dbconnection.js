const mysql=require("mysql");

const pool=mysql.createPool({
  connectionLimit:10,
  host:'localhost',
  user:'root',
  password:'',
  database:'truckdb'
});


function insertquerywithparams(sql,value){

return new  Promise((resolve,reject)=>{
pool.getConnection((err,connection)=>{
  if(err){
console.log(err);
return reject(err);
  }else{
    console.log("connection Established");

connection.query(sql,value,(error,result,field)=>{
  if(error){
     return reject(error);
  }
  else{
    return resolve(result);
  }
});
  }
});

});

}

module.exports={
  insertquerywithparams:insertquerywithparams
}
