import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";

const DesignDetailPage = () => {
    const [design, setDesign] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchDesign = async () => {
            try {
                const res = await api.get(`/designs/${id}`);
                setDesign(res.data);
            } catch (error) {
                console.error("Error fetching design:", error);
                toast.error("Failed to fetch the design");
            } finally {
                setLoading(false);
            }
        };
        fetchDesign();
    }, [id]);

    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this design?")) return;
        try {
            await api.delete(`/designs/${id}`);
            toast.success("Design deleted successfully");
            navigate("/designs");
        } catch (error) {
            console.error("Error deleting design:", error);
            toast.error("Failed to delete design");
        }
    };

    const handleSave = async () => {
        const { category, title, image, outfitWeight, price } = design;
        if (!category || !title || !image || !outfitWeight || !price) {
            toast.error("Please fill all required fields");
            return;
        }

        setSaving(true);
        try {
            await api.put(`/designs/${id}`, design);
            toast.success("Design updated successfully!");
            navigate("/designs");
        } catch (error) {
            console.error("Error saving design:", error);
            toast.error("Failed to update design");
        } finally {
            setSaving(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDesign((prev) => ({ ...prev, [name]: value }));
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-base-200 flex items-center justify-center">
                <LoaderIcon className="w-10 h-10 animate-spin text-primary" />
            </div>
        );
    }

    if (!design) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-500">
                Design not found
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-base-200">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <Link to="/designs" className="btn btn-ghost">
                            <ArrowLeftIcon className="w-5 h-5" />
                            Back to Designs
                        </Link>
                        <button onClick={handleDelete} className="btn btn-error btn-outline">
                            <Trash2Icon className="w-5 h-5" />
                            Delete Design
                        </button>
                    </div>

                    {/* Design Edit Form */}
                    <div className="card bg-base-100">
                        <div className="card-body">
                            {/* Image Preview */}
                            {design.image && (
                                <img
                                    src={design.image}
                                    alt={design.title}
                                    className="w-full h-64 object-cover rounded-lg mb-4"
                                />
                            )}

                            {/* Category */}
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Category *</span>
                                </label>
                                <select
                                    name="category"
                                    className="select select-bordered"
                                    value={design.category || ""}
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
                                    className="input input-bordered"
                                    value={design.title || ""}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Description */}
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea
                                    name="description"
                                    className="textarea textarea-bordered h-24"
                                    value={design.description || ""}
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
                                    className="input input-bordered"
                                    value={design.material || ""}
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
                                    className="input input-bordered"
                                    value={design.image || ""}
                                    onChange={handleChange}
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
                                    value={design.fitStyles || []}
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
                                    value={design.styleAesthetic || []}
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
                                    value={design.outfitWeight || ""}
                                    onChange={handleChange}
                                >
                                    <option value="">Select weight</option>
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
                                    className="input input-bordered"
                                    value={design.price || ""}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Save */}
                            <div className="card-actions justify-end">
                                <button
                                    className="btn btn-primary"
                                    disabled={saving}
                                    onClick={handleSave}
                                >
                                    {saving ? "Saving..." : "Save Changes"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignDetailPage;
