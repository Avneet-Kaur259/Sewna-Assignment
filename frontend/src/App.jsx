import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import UploadDesignPage from "./pages/UploadDesignPage"
import DesignDetailPage from "./pages/DesignDetailPage"
import AllDesignsPage from "./pages/AllDesignsPage"

const App = () => {
  return (
    <div className="relative h-full w-fll">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00DDFF40_100%)]" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designs" element={<AllDesignsPage />} />
        <Route path="/upload" element={<UploadDesignPage />} />
        <Route path="/designs/:id" element={<DesignDetailPage />} />
      </Routes>
    </div>
  )
}

export default App