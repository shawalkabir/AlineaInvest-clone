import React from "react";
import "./Home.css";
import Header from "./Header";
import Hero from "./Hero";
import Promo from "./Promo";
import Feature from "./Feature";
import Community from "./Community";
import ClientSection from "./ClientSection";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home">
      <Header />
      <Hero />
      <Promo />
      <Feature />
      <Community />
      <ClientSection />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Home;
