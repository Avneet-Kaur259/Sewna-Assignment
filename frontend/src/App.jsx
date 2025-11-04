import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import toast from "react-hot-toast"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App