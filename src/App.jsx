import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import ContactUs from "./components/ContactUs";
import Footer from "./components/NewHome/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import BookAgeOf from "./components/Pages/BookAgeOf";
import BookTheLeader from "./components/Pages/BookTheLeader";
import BookUnB from "./components/Pages/BookUnB";
import BookNoClo from "./components/Pages/BookNoClo";
import ScrollToTop from "./components/ScrollToTop";
import AboutPage from "./components/AboutUs";
import SpeakingPage from "./components/Speaking";
import ConsultingPage from "./components/Consulting";
import PublishingPage from "./components/Publishing";
import MediaPage from "./components/MediaPage";
import GalleryPage from "./components/Gallery";
import BlogPage from "./components/BlogPage";
import BlogDetails from "./components/Pages/BlogDetails";
import Admin from "./components/Admin/Admin";
import AddBlog from "./components/Admin/AddBlog";
import EditBlog from "./components/Admin/EditBlog";
import AdminDashboard from "./components/Admin/AdminDashboard";
import GoToTopButton from "./components/GoToTopButton";

import HeroSection from "./components/NewHome/HeroSection";

function LayoutWrapper() {
  const location = useLocation();
  const isAdminRoute = location.pathname.includes("admin");
  const isHomePage = location.pathname === "/";

  return (
    <>
      <ScrollToTop />
      {!isAdminRoute && <Header />}
      <Routes>
        {/* Admin Routes */}
        <Route path="/author-admin" element={<Admin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-blog/add" element={<AddBlog />} />
        <Route path="/admin-edit/:id" element={<EditBlog />} />

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/book/age-of-the-imperfect-leader" element={<BookAgeOf />} />
        <Route path="/book/the-10x-leader" element={<BookTheLeader />} />
        <Route path="/book/unbroken" element={<BookUnB />} />
        <Route path="/book/no-closure-no-forgiveness" element={<BookNoClo />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/speaking" element={<SpeakingPage />} />
        <Route path="/consulting" element={<ConsultingPage />} />
        <Route path="/publishing" element={<PublishingPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
      </Routes>

      {!isAdminRoute && !isHomePage && !ContactUs && <HeroSection />}

      {!isAdminRoute && <Footer />}
      <GoToTopButton />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="font-sans">
        <LayoutWrapper />
      </div>
    </Router>
  );
}

export default App;
