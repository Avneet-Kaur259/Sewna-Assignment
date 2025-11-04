import mongoose from "mongoose";

const designSchema = new mongoose.Schema(
    {
        category: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        material: {
            type: String,
            required: false,
        },
        image: {
            type: String,
            required: true,
            default: "",
        },
        fitStyles: {
            type: [String],
            enum: ['Masculine', 'Feminine', 'Neutral'],
            default: []
        },
        styleAesthetic: {
            type: [String],
            enum: ['Traditional', 'Modern', 'Minimalist', 'Luxury'],
            default: []
        },
        outfitWeight: {
            type: String,
            enum: ['Minimal', 'Heavy'],
            required: true
        },
        price: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Design = mongoose.model("Design", designSchema);

export default Design;