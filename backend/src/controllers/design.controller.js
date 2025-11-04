import Design from "../models/design.js";

export async function getAllDesigns(req, res) {
    try {
        const designs = await Design.find().sort({ createdAt: -1 });
        res.status(200).json(designs);
    } catch (error) {
        console.error("Error in getAllDesigns controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export async function getDesignById(req, res) {
    try {
        const design = await Design.findById(req.params.id);
        if (!design) return res.status(404).json({ message: "Design not found" });
        res.status(200).json(design);
    } catch (error) {
        console.error("Error in getDesignById controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export async function uploadDesign(req, res) {
    try {
        const { category, title, description, material, image, fitStyles, styleAesthetic, outfitWeight, price } = req.body;
        const design = new Design({ category, title, description, material, image, fitStyles, styleAesthetic, outfitWeight, price });

        const savedDesign = await design.save();
        res.status(201).json(savedDesign);
    } catch (error) {
        console.error("Error in uploadDesign controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export async function updateDesign(req, res) {
    try {
        const { category, title, description, material, image, fitStyles, styleAesthetic, outfitWeight, price } = req.body;
        const updatedDesign = await Design.findByIdAndUpdate(req.params.id, { category, title, description, material, image, fitStyles, styleAesthetic, outfitWeight, price }, { new: true });
        if (!updatedDesign) return res.json({ message: "Design not found" });

        res.status(200).json(updatedDesign);
    } catch (error) {
        console.error("Error in updateDesign controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export async function deleteDesign(req, res) {
    try {
        const deletedDesign = await Design.findByIdAndDelete(req.params.id);
        if (!deletedDesign) return res.json({ message: "Design not found" });

        res.status(200).json({ message: "Design deleted successfully!" });
    } catch (error) {
        console.error("Error in deleteDesign controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
};