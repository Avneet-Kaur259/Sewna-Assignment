import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import { useDesignStore } from "../store/useDesignStore";

const DesignCard = ({ design }) => {
    const { handleDelete } = useDesignStore();

    return (
        <div className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00b67f] overflow-hidden">
            {/* Image Section */}
            <Link to={`/designs/${design._id}`}>
                <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-56 object-cover"
                />
            </Link>

            {/* Card Body */}
            <div className="card-body">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="card-title text-lg text-base-content mb-1">
                            {design.title}
                        </h3>
                        <p className="text-sm text-base-content/70">{design.category}</p>
                    </div>
                    <span className="text-primary font-semibold">${design.price}</span>
                </div>

                {/* Description */}
                {design.description && (
                    <p className="text-sm text-base-content/70 mt-2 line-clamp-2">
                        {design.description}
                    </p>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                    {design.fitStyles?.map((fit) => (
                        <span
                            key={fit}
                            className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700"
                        >
                            {fit}
                        </span>
                    ))}
                    {design.styleAesthetic?.map((style) => (
                        <span
                            key={style}
                            className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700"
                        >
                            {style}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="card-actions justify-between items-center mt-4">
                    <span className="text-sm text-base-content/60">
                        {formatDate(new Date(design.createdAt))}
                    </span>
                    <div className="flex items-center gap-2">
                        <Link
                            to={`/designs/${design._id}`}
                            className="btn btn-ghost btn-xs text-primary"
                            title="Edit Design"
                        >
                            <PenSquareIcon className="size-4" />
                        </Link>
                        <button
                            className="btn btn-ghost btn-xs text-error"
                            onClick={(e) => handleDelete(e, design._id)}
                            title="Delete Design"
                        >
                            <Trash2Icon className="size-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignCard;
