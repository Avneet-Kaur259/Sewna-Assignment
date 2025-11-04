import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeftIcon } from "lucide-react";
import toast from "react-hot-toast";
import api from "../lib/axios";

const UploadDesignPage = () => {
    const [formData, setFormData] = useState({
        category: "",
        title: "",
        description: "",
        material: "",
        image: "",
        fitStyles: [],
        styleAesthetic: [],
        outfitWeight: "",
        price: "",
    });
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { category, title, image, outfitWeight, price } = formData;
        if (!category || !title || !image || !outfitWeight || !price) {
            toast.error("Please fill all required fields");
            return;
        }

        setLoading(true);
        try {
            await api.post("/designs", formData);
            toast.success("Design uploaded successfully!");
            navigate("/designs");
        } catch (error) {
            console.error("Error uploading design:", error);
            toast.error("Failed to upload design");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-base-200">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <Link to="/designs" className="btn btn-ghost mb-6">
                        <ArrowLeftIcon className="size-5" />
                        Back to Designs
                    </Link>

                    <div className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="card-title text-2xl mb-4">Upload New Design</h2>

                            <form onSubmit={handleSubmit}>
                                {/* Category */}
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Category *</span>
                                    </label>
                                    <select
                                        name="category"
                                        className="select select-bordered"
                                        value={formData.category}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Category</option>
                                        <option value="BridalAndPartyLahengas">Bridal And Party Lahengas</option>
                                        <option value="SalwarKameez">Salwar Kameez</option>
                                        <option value="Pant/SkirtSuits&Blazers">Pant/Skirt Suits & Blazers</option>
                                        <option value="AmericanWeddingGowns">American Wedding Gowns</option>
                                        <option value="BridesmaidDresses">Bridesmaid Dresses</option>
                                        <option value="Indo-WesternCo-ords">Indo-Western Co-ords</option>
                                        <option value="FusionSets">Fusion Sets</option>
                                        <option value="CasualDayDresses">Casual Day Dresses</option>
                                        <option value="Sundresses">Sundresses</option>
                                        <option value="MenCustomSuits&Tuxedos">Men Custom Suits & Tuxedos</option>
                                        <option value="MenSherwanis&KurtaSets">"Men Sherwanis & Kurta Sets</option>
                                        <option value="MenFormals">Men Formals</option>
                                        <option value="Resort&Beachwear">Resort & Beachwear</option>
                                        <option value="OssacionWear">Ossacion Wear</option>
                                        <option value="Children&TeenApparel">Children & Teen Apparel</option>
                                        <option value="Cultural&HeritageCollections">Cultural & Heritage Collections</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>

                                {/* Title */}
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Title *</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Design title"
                                        className="input input-bordered"
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Description */}
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea
                                        name="description"
                                        placeholder="Describe your design..."
                                        className="textarea textarea-bordered h-24"
                                        value={formData.description}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Material */}
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Material</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="material"
                                        placeholder="e.g. Cotton, Silk"
                                        className="input input-bordered"
                                        value={formData.material}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Image URL */}
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Image URL *</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="image"
                                        placeholder="https://example.com/image.jpg"
                                        className="input input-bordered"
                                        value={formData.image}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Fit Styles */}
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Fit Styles</span>
                                    </label>
                                    <select
                                        name="fitStyles"
                                        className="select select-bordered"
                                        value={formData.fitStyles}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Option</option>
                                        <option value="Masculine">Masculine</option>
                                        <option value="Feminine">Feminine</option>
                                        <option value="Neutral">Neutral</option>
                                    </select>
                                </div>

                                {/* Style Aesthetic */}
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Style Aesthetic</span>
                                    </label>
                                    <select
                                        name="styleAesthetic"
                                        className="select select-bordered"
                                        value={formData.styleAesthetic}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Option</option>
                                        <option value="Traditional">Traditional</option>
                                        <option value="Modern">Modern</option>
                                        <option value="Minimalist">Minimalist</option>
                                        <option value="Luxury">Luxury</option>
                                    </select>
                                </div>

                                {/* Outfit Weight */}
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Outfit Weight *</span>
                                    </label>
                                    <select
                                        name="outfitWeight"
                                        className="select select-bordered"
                                        value={formData.outfitWeight}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Weight</option>
                                        <option value="Minimal">Minimal</option>
                                        <option value="Heavy">Heavy</option>
                                    </select>
                                </div>

                                {/* Price */}
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Price ($)*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="price"
                                        placeholder="Enter price"
                                        className="input input-bordered"
                                        value={formData.price}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Submit */}
                                <div className="card-actions justify-end">
                                    <button type="submit" className="btn btn-primary" disabled={loading}>
                                        {loading ? "Uploading..." : "Upload Design"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadDesignPage;
