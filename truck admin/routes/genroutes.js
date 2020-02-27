var router=require("express").Router();

var db=require("../controller/dbconnection.js");
var validator=require("../controller/validator.js");

var bodyparser=require("body-parser");
router.use(bodyparser.urlencoded({extended: false}));



router.get("/login",(req,res)=>{

   res.render("login");
});


router.post("/dashboard",(req,res)=>{

res.render("dashboard");
});

router.post("/user",(req,res)=>{


name=validator.namevalidation(req.body.name);
phonenumber=validator.phonenumbervalidation();
vehiclenumber=validator.vehiclenumbervalidation();
vehicledetail=validator.vehicledetailvalidation();



/*
values=[req.body.ownerid,req.body.name,req.body.phonenumber,req.body.vehiclenumber,req.body.description];

db.insertquerywithparams("insert into adddriver(ownerid,drivername,drivernumber,vehiclenumber,vehicledetail) values(?)",[values]).then((result)=>{
  console.log(result);
}).catch((error)=>{
  console.log(error);
});

*/
res.render("user");

});


router.post("/table",(req,res)=>{

res.render("table");

});


router.post("/typography",(req,res)=>{

res.render("typography");

});


router.post("/icons",(req,res)=>{

res.render("icons");

});

router.post("/maps",(req,res)=>{

res.render("maps");

});

router.post("/notifications",(req,res)=>{

res.render("notifications");

});
module.exports=router;
