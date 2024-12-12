import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Layout from "./components/Layout";
import Home from "./pages/Home/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />            
        </Route>
        <Route path="/app" element={<Layout />}>
          <Route path="inicio">
            <Route index element={<Home />} />
          </Route>
        </Route>
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
