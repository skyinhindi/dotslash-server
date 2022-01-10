const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads/');
  },
  filename: function(req, file, cb){
    cb(null, new Date().toISOString().replace(/:/g, '-') + '.jpg');
  }
});
const upload = multer({storage : storage});


//Controllers
const viewComplaint = require('./controllers/viewComplaint');
const saveComplaint = require('./controllers/saveComplaint');
const fetchList = require('./controllers/fetchList');

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = process.env.MONGODB_URI || 'mongodb+srv://dbAdmin:dotSlashAdmin@cluster0.7jope.mongodb.net/dotslash?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(process.env.PORT || 5000))
  .catch(err => console.log(err));

// middleware & static files
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));

// routes
app.get('/', fetchList);

app.get('/view-complaint', viewComplaint);

app.post('/save-complaint', upload.single('image'), saveComplaint);

app.use((req, res) => {
  res.status(404).json({
    success:false,
    message:'Invalid Request'
  });
});
