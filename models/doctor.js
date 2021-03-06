const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    speQualification: {
        type: String,
    },
    regNo: {
        type: String,
        required: true
    },
    status:{
        type:Number,
        default:0
    },
    pass:{
        type:String,
        default:''
    }
});

const Doctor = new mongoose.model("Doctor", doctorSchema);
exports.Doctor = Doctor;