const express = require("express");
const userRoute =  express.Router();

const {mockddatamodelone} = require("../models/mockdataone");
const {mockddatamodeltwo} = require("../models/mockdatatwo");

// userRoute.post("/mockdataone",async(req,res)=>{
//     let body =  req.body;
//     try {
//         const user = new mockddatamodelone(body);
//         await user.save();
//         res.json({
//             successMessage: "Registration success. Please signin.",
//           });
        
//     } catch (error) {
//         console.log("signupController error: ", err);
//         res.status(500).json({
//         errorMessage: "Server error",
//     });
//     }
// });


userRoute.get('/api', async (ask, give) => {
    let data = await mockddatamodelone.aggregate([
        {
            $lookup: {
                from: "mockdatatwos",
                localField: "full_name",
                foreignField: "full_name",
                as: "team_data"
            }
        },
        {
            $project: {
                _id: 0,
                "Team Name": { $arrayElemAt: ["$team_data.team_name", 0] },
                "Full Name": "$full_name",
                Email: "$email",
                Number: "$number",
                City: "$city",
                URL: "$url"
            }
        }
    ])
    give.send(data)
})

module.exports={
    userRoute
}