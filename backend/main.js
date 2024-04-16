let express=require("express");
let mysql=require("mysql");
let cors=require("cors")

let app=express()
app.use(cors())
app.use(express.json())

let db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"shubhji",
    database:"database1"
})

db.connect((err)=>{
    if(err) throw err
    else{
        console.log("database is connected");
    }
})

app.get("/api/users",(req,res)=>{
    
    const sql='SELECT * FROM user';
    db.query(sql,(err,result)=>{
        if(err) throw err
        else 
            res.send(result)
      
    })
})

app.post("/api/createUser",(req,res)=>{
    const {name,email,mobile}=req.body;
   let sql='insert into user(name,email,mobile) values(?,?,?)';
   db.query(sql,[name,email,Number(mobile)],(err,result)=>{
    if(err) throw err
    res.send("user added")
   })
})


app.delete('/api/deleteUser/:id', (req, res) => {
    let userId = req.params.id; 
    const sql='delete from user where userId = ?';
    db.query(sql,[req.params.id],(err,result)=>{
        if(err) throw err 
        else{
            res.send("user deleted")
        }
    })



});

app.listen(3000);

