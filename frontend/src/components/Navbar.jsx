import { PlusIcon } from "lucide-react"
import { Link } from "react-router"

const Navbar = () => {

    return (
        <header className="bg-base-300 border-b border-base-content/10">
            <div className="mx-auto max-w-6xl p-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-[#00b67f] font-mono tracking-tight">
                        <Link to={"/"} >Sewna</Link>
                    </h1>
                    <div className="flex items-center gap-4">
                        <Link to={"/upload"} className="btn btn-primary hover:bg-[#00b67f]">
                            <PlusIcon className="size-5" />
                            <span>New Design</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar