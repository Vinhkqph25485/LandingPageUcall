import { titleHeader } from "@/utils/data";
import imgHeader from "./headerIMG.svg";
import ContactForm, { ContactFormModal, ContactFormPage } from "@/components/ContactForm";
import { Problems } from "@/components/Problems/Problems";
import ProductIntro from "@/components/ProductIntro/ProductIntro";
import { ProductDiagram } from "@/components/ProductDiagram/ProductDiagram";
import Features from "@/components/Features/Features";
import EffectivenessUcall from "@/components/EffectivenessUcall/EffectivenessUcall";
import { AppliedSolution } from "@/components/AppliedSolution/AppliedSolution";
import Testimonials from "@/components/Testimonials/Testimonials";
import VideoScreenshot from "@/components/VideoScreenshot/VideoScreenshot";
import Customers from "@/components/Customers/Customers";
import CaseSolution from "@/components/CasesSolution/CaseSolution";
import { useEffect, useState } from "react";
import logo from './android-chrome-192x192.png'
const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  const handleScroll = () => {
    const thresholdElement = document.getElementById("thresholdElement");
    const scrollThreshold = thresholdElement.offsetTop - window.innerHeight;

    if (window.scrollY >= scrollThreshold && !hasShownPopup) {
      setShowPopup(true);
      setHasShownPopup(true);
      window.removeEventListener("scroll", handleScroll);
    }
  };

  useEffect(() => {
    if (!showPopup) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showPopup]);

  return (
    <div>
      <div className="flex items-center justify-center gap-8 mx-auto py-5"><img src={logo} width={50} alt="" /> <h1 className="text-4xl font-bold text-[#1e2967]">UCALL</h1></div>
      <div className="bg-[#1e2967]">
        <div className="w-[1200px] mx-auto py-8">
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-white text-5xl py-3 font-bold">Giải pháp</h1>
              <h1 className="text-white text-5xl py-5 font-bold">
                Callbot AI Auto Call
              </h1>
              <ul>
                {titleHeader.map((item: string) => {
                  return (
                    <>
                      <li className="flex justify-items-center">
                        <span className="py-2">⚡️</span>
                        <span
                          className="text-white font-semibold text-[17px] py-2"
                          style={{ marginLeft: "12px" }}
                        >
                          {item}
                        </span>
                      </li>
                    </>
                  );
                })}
              </ul>
              <img src={imgHeader} alt="Ảnh call center" className="w-full" />
            </div>
            <div className="pl-[50px]">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 pb-5">
        <Problems />
      </div>

      <div
        className="mt-8"
        style={{
          backgroundColor: "#1e2967",
          paddingTop: "36px",
          paddingBottom: "10px",
        }}
      >
        <ProductIntro />
        <ProductDiagram />
      </div>
      <div className="mt-8">
        <CaseSolution />
      </div>
      <div className="mt-8">
        <Features />
      </div>
      <div className="mt-8">
        <EffectivenessUcall />
      </div>
      <div id="thresholdElement">
        <div
          className="mt-8"
          style={{
            backgroundColor: "#1e2967",
            paddingTop: "36px",
            paddingBottom: "64px",
          }}
        >
          <AppliedSolution />
          {showPopup && (
        <ContactFormModal isOpen={showPopup} close={() => setShowPopup(false)} />
      )}
        </div>
      </div>
      <div className="mt-8">
        <Testimonials />
      </div>
      <div className="mt-8">
        {/* <ZaloScreenshot /> */}
        <VideoScreenshot />
      </div>
      <div className="mt-8">
        <Customers />
      </div>
      <div className="mt-8">
        <ContactFormPage />
      </div>
    </div>
  );
};

export default HomePage;
