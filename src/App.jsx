
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Service from "./pages/Service/Service";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import Blog from "./components/Blog";

export default function App() {
  return (
<>
<Header/>
<Routes>
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/blog" element={<Blog/>}/>
      {/* <Route path="/contact" element={<Contact/>}/> */}
      <Route path="*" element={<div>404 </div>}/>
</Routes>

<Footer></Footer>
</>
  )
}
