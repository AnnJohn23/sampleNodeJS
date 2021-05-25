const express = require('express')
const router = express.Router()
const entity = require('../model/entity')

//GET
router.get('/',async(req,res)=>{
 try{
    const output = await entity.find()
     res.json(output)
 }catch(err){
    res.send("Error")
 }
})

//GET BY Id
router.get('/:id',async(req,res)=>{
   try{
      const output = await entity.findById(req.params.id)
       res.json(output)
   }catch(err){
      res.send("Error")
   }
  })

//POST
router.post('/',async(req,res)=>{

   const result = new entity({
      name: req.body.name,
      tech: req.body.tech,
      sub: req.body.sub
      
   })
   
 try{
 const a1 = await result.save()
  res.json(a1)
 }catch(err){
      res.send("Error")
 }
})
//PATCH
router.patch('/:id',async(req,res)=>{
   try{
      const output = await entity.findById(req.params.id)
      output.sub = req.body.sub
      const result = await output.save()
      res.json(result)

   }catch(err){
      res.send("Error")
   }
})
//DELETE
router.delete('/:id',async(req,res)=>{
   try{
      const output = await entity.findById(req.params.id)
      output.sub = req.body.sub
      const result = await output.remove()
      res.json(result)

   }catch(err){
      res.send("Error")
   }
})

module.exports =router