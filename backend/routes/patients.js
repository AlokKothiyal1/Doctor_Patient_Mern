const express = require('express');
const Patient = require('../models/Patient')
const dotenv = require('dotenv')

const router = express.Router();
dotenv.config();


router.post("/post",async(req,res)=>{
    const payload = new Patient(
        {
         doctor_id:req.body.doctor_id,
         name:req.body.name,
         gender:req.body.gender,
         age:req.body.age,
         medicine:req.body.medicine || {}
        }
    )

    try{
        const savedPatients = await payload.save();
        res.status(200).send("Patient added successfully")
    } catch(err){
        res.status(400).send(err)
    }
})

router.get("/get",async(req,res)=>{
    const did = String(req.query.did);
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const results = {}

    const startIndex = (page-1)*limit;
    const endIndex = (page)*limit;

    if(endIndex < await Patient.find({doctor_id:did}).countDocuments().exec()){
        results.next = {
            page:page+1,
            limit:limit
        }
    }
    if(startIndex>0){
        results.prev = {
            page:page-1,
            limit:limit
        }
    }
    try{
        results.current = await Patient.find({doctor_id:did}).limit(limit).skip(startIndex).exec();
        results.total = await Patient.find({doctor_id:did}).countDocuments().exec();
        res.json(results);
    } catch(error){
        res.status(500).send(error)
    }
})
router.delete("/delete/:pid",async(req,res)=>{
    const pid = req.params.pid
    Patient.findByIdAndDelete(pid,(err)=>{
        if(err) return res.status(500).send(err);
        res.status(200).send("Successful deletion")
    })
})



module.exports = router