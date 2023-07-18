const mongoose = require("mongoose");

const mockdataoneschema = mongoose.Schema({
    full_name: {
        type : String,
        require : true
    } ,
    email : {
        type : String,
        require : true,
    },
    number : {
        type : Number,
        require : true,
    } ,
    city:  {
        type : String,
        require : true,
    },
    url:  {
        type : String,
        require : true,
    }
},{
    versionKey : false
});

const mockddatamodelone = mongoose.model("mockdataones",mockdataoneschema);

module.exports={
    mockddatamodelone
}