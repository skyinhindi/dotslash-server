const complaint = require('../models/complaint');

async function viewComplaint(req, res){
    const {id} = req.body;

    await complaint.findById( id, (err, docs) => {
        if(err)
            throw err;
        else{
            res.status(200).json({
                success: true,
                data: docs
            });
        }
    });
} 

module.exports = viewComplaint;