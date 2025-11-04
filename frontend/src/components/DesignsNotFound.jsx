import { NotebookIcon } from "lucide-react"
import { Link } from "react-router"

const DesignsNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
            <div className="bg-primary/10 rounded-full p-8">
                <NotebookIcon className="size-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">No designs yet</h3>
            <p className="text-base-content/70">Ready to organize your thoughts? Upload your first design to get started on your journey.</p>
            <Link to={"/upload"} className="btn btn-primary hover:bg-[#00b67f]">Upload Your First Design</Link>
        </div>
    )
}

export default DesignsNotFound