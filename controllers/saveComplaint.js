const Complaint = require('../models/complaint');
const fs = require('fs');
const path = require('path');
const { Mongoose } = require('mongoose');


async function saveComplaint(req, res){
      const complaint = new Complaint({
        title: req.body.title,
        image: req.file.path,
        description: req.body.description,
        latitude: req.body.latitude,
        longitude: req.body.longitude
      });
      complaint.save()
          .then(result => {
              res.status(201).json({
                success:true,
                message: 'complaint Created Successfully'
              });
          })
          .catch(err => {
            res.status(500).json({
              success:false,
              message: 'Failed to create complaint'+ err.message,
              code:500.03
            });
          }); 
}
  
  module.exports = saveComplaint;