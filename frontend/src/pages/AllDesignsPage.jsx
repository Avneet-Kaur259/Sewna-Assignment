import { useEffect } from "react";
import Navbar from "../components/Navbar";
import DesignsNotFound from "../components/DesignsNotFound";
import DesignCard from "../components/DesignCard";
import { useDesignStore } from "../store/useDesignStore";

const AllDesignsPage = () => {
    const { fetchDesigns, designs, loading } = useDesignStore();

    useEffect(() => {
        fetchDesigns();
    }, [fetchDesigns]);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto p-4 mt-6">
                {loading && (
                    <div className="text-center text-primary py-10 text-lg font-medium">
                        Loading designs...
                    </div>
                )}

                {!loading && designs.length === 0 && <DesignsNotFound />}

                {!loading && designs.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {designs.map((design) => (
                            <DesignCard key={design._id} design={design} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllDesignsPage;
