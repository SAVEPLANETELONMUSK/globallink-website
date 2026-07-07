import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TrackingSearch from "./components/TrackingSearch";
import Coverage from "./components/Coverage";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import TrackShipment from "./pages/TrackShipment";
import GetQuote from "./pages/GetQuote";
import Contact from "./pages/Contact";

import Dashboard from "./pages/admin/Dashboard";
import Shipments from "./pages/admin/Shipments";
import CreateShipment from "./pages/admin/CreateShipment";
import UpdateShipment from "./pages/admin/UpdateShipment";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <TrackingSearch />
      <Coverage />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/track" element={<TrackShipment />} />

        <Route path="/quote" element={<GetQuote />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/admin/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/admin/create"
          element={<CreateShipment />}
        />

        <Route
          path="/admin/update"
          element={<UpdateShipment />}
        />

        <Route
          path="/admin/shipments"
          element={<Shipments />}
        />

      </Routes>
    </BrowserRouter>
  );
}
