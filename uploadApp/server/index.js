const express = require("express");
const app = express();
const multer  = require('multer')
const cors = require('cors');
app.use(cors({
    origin: '*',
    methods: ['GET','POST']
}));

// setup multer for file upload
var storage = multer.diskStorage(
    {
        destination: './uploads',
        filename: function (req, file, cb ) {
            cb( null, file.originalname);
        }
    }
);

const upload = multer({ storage: storage } )

app.use(express.json());
// serving front end build files
app.use(express.static(__dirname + "/../uploads"));

// route for file upload
app.post("/api/uploadfile", upload.single('myFile'), (req, res, next) => {
    alert(req.file.originalname + " file successfully uploaded !!");
    res.sendStatus(200);
});

app.listen(3001, () => console.log("Listening on port 3001"));