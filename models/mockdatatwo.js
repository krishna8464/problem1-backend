const mongoose = require("mongoose");

const mockdatatwoschema = mongoose.Schema({
    full_name: {
        type : String,
        require :   true
    } ,
    email : {
        type : String,
        require : true,
    },
    team_name:  {
        type : String,
        require : true,
    }
},{
    versionKey : false
});

const mockddatamodeltwo = mongoose.model("mockdatatwos",mockdatatwoschema);

module.exports={
    mockddatamodeltwo
}