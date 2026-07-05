const express =require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'));

app.get('/greeting/:name' , function(req,res){
    const name =req.params.name
    res.send(name)
    // console.log(req.query)
})

app.listen(3000, function()
{
    console.log('listening on port 3000')
})