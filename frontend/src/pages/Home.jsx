import { useNavigate } from "react-router";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen w-screen">
            {/* Left Side - I need a Designer */}
            <div
                onClick={() => navigate("/designs")}
                className="relative flex-1 cursor-pointer group overflow-hidden"
            >
                {/* Background image or animation */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1350&q=80')",
                    }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        I am a Designer
                    </h2>
                    <p className="text-white mb-6">
                        Showcase your work and connect with clients seeking your skills.
                    </p>
                    <button className="border border-white bg-primary text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition-all">
                        Join
                    </button>
                </div>
            </div>

            {/* Right Side - I am a Designer */}
            <div
                onClick={() => alert("Designer flow coming soon!")}
                className="relative flex-1 cursor-pointer group overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1350&q=80')",
                    }}
                ></div>

                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        I need a Designer
                    </h2>
                    <p className="text-white/80 mb-6">
                        Find talented designers to bring your ideas to life.
                    </p>
                    <button className="bg-white text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white hover:border transition-all">
                        Explore
                    </button>
                </div>
            </div>
        </div>
    );
}
