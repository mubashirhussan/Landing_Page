// import React from 'react'

import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import HomeNavbar from "./components/HomeNavbar";
import Services from "./components/Services";
import Vission from "./components/Vission";

export default function LandingPage() {
  return (
    <>
      <HomeNavbar />
      <Heading />
      <Vission />
      <Services />
      <ContactUs />
      <Footer />
    </>
  );
}
