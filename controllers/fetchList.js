const complaint = require('../models/complaint');

async function fetchList(req, res){
    await complaint.find({}, (err, docs) => {
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

module.exports = fetchList;