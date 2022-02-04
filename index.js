const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 3000
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/',(req,res)=>{
  res.render("form")  
})
app.post('/resume',(req,res)=>{
    res.render("resume",{names:req.body.names,college_name:req.body.college_name})
})
app.listen(port, () => console.log(` on local host ${port}!`))