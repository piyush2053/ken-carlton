import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Components/Pages/Home/Home";
import { WatchesOrderPage } from "../Components/Watches/WatchesOrderPage";

export default function Layout() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order-watches" element={<WatchesOrderPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
