const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    metaTitle: { type: String, required: true },
    metaKeywords: { type: String, required: true },
    metaDiscription: { type: String, required: true },
    metaImageLink:{type:String},
    category: { type:Array, required: true },
    MaxAge: { type: String, required: true },
    MinAge: { type: String, required: true },
    appAdmitCardDate: { type: String, required: true },
    appCustumDateLabel: { type: Array, required: true },
    appCustumFeeLabel: { type: Array, required: true },
    appExamDate: { type: String, required: true },
    appFeeLastDate: { type: String, required: true },
    appGeneralFemaleFee: { type: String, required: true },
    appGeneralMAleFee: { type: String, required: true },
    appLastDate: { type: String, required: true },
    appReserverMaleFee: { type: String, required: true },
    appReserverFemaleFee: { type: String, required: true },
    appStartDate: { type: String, required: true },
    applyLink: { type: String, required: true },
    custumAgeLabel: { type: Array, required: true },
    custumLinkLabel: { type: Array, required: true },
    dateOfPost: { type: String, required: true },
    howToFillForm: { type: String, required: true },
    nameOfPost: { type: String, required: true },
    postAgeLimit: { type: String, required: true },
    postDescription: { type: String, required: true },
    postEligibility: { type: String, required: true },
    custumPostDetails: { type: Array, required: true },
    seoHeading1: { type: String, required: true },
    seoHeadingh2: { type: String, required: true },
    seoHeadingh3: { type: String, required: true },
    seoHeadingh4: { type: String, required: true },
    stepToFillForm: { type: Array, required: true },
    vacencyHeading: { type: String, required: true },
    linkHeading:{type:String,required:true},
    seoLink:{type:String,required:true},
    questionAnswer:{type:Array,required:false},
}, { timestamps: true })
const PostModel = mongoose.models.PostModel
  ? mongoose.models.PostModel // If already defined, use the existing model
  : mongoose.model('PostModel', postSchema); // Otherwise, create a new model

module.exports = PostModel;
