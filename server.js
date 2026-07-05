const express =require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'));
//ex1
app.get('/greeting/:name' , function(req,res){
    const name =req.params.name
    res.send(name)
    // console.log(req.query)
})
//ex2
app.get('/roll/:num', function(req,res){
 const number = Number(req.params.num)
     
    console.log(typeof(number))
    
    const rand = Math.floor(Math.random() * num);
    console.log(num)
      if (typeof(number) === 'number'){
            res.send(`you rolled a ${rand}`)
       }else{
        res.send('this is not a number')
       }

})

//ex3
   const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];
    app.get('/collectibles/:index' ,function(req,res){  
     let index = req.params.index
        if (collectibles [index]){
            res.send(`So, you want the ${(collectibles[index].name)} ? For ${(collectibles[index].price)}, it can be yours!`)
                     console.log(collectibles[index].price)

         } else{
            res.send('This item is not yet in stock. Check back soon!')
         }
})

app.listen(3000, function()
{
    console.log('listening on port 3000')
})