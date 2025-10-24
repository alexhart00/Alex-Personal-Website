"use client";
import { NavbarComponent } from "./components/NavBar";
import { ProfileComponent } from "./components/Profile";
import { AboutComponent } from "./components/About";
import { FooterComponent } from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavbarComponent/>
      <ProfileComponent/>
      <AboutComponent/>
      <FooterComponent/>
    </>
  );  
}







