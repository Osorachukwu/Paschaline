"use client"
import type { StaticImageData } from "next/image";
import Image from "next/image";
import React, { useState } from "react";
import { X } from "lucide-react";
import img1 from "@/assets/gallery/img1.jpg";
import img2 from "@/assets/gallery/img2.jpg";
import img3 from "@/assets/gallery/img3.jpg";
import img4 from "@/assets/gallery/img4.jpg";
import img5 from "@/assets/gallery/img5.jpg";
import img6 from "@/assets/gallery/img6.jpg";
import img7 from "@/assets/gallery/img7.jpg";
import img8 from "@/assets/gallery/img8.jpg";
import img9 from "@/assets/gallery/img9.jpg";
import img10 from "@/assets/gallery/img10.jpg";
import img11 from "@/assets/gallery/img11.jpg";
import img12 from "@/assets/gallery/img12.jpg";
import img13 from "@/assets/gallery/img13.jpg";
import img14 from "@/assets/gallery/img14.jpg";

export default function Gallery() {
  let items = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);

function openLightbox(image: StaticImageData) {
  setSelectedImage(image);
  setIsOpen(true);
}

  function closeLightbox() {
    setIsOpen(false);
    setSelectedImage(null);
  }
  return (
    <div className="py-10 md:py-28 bg-gray-200">
      <div className="text-center mt-28 sm:mt-20 mb-10">
        <p className="mb-2 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl">Gallery</p>
        <div className="flex justify-center">
          <div className="h-1 w-20 bg-blue-500"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-5 px-4">
        {items.map((photo, i) => (
          <div key={i} className="hover:scale-[1.05] relative w-full max-h-64 md:max-h-96 border" onClick={() => openLightbox(photo)}>
            <Image
              className="object-cover h-full w-full rounded-lg cursor-pointer"
              src={photo}
              alt="Paschalines gallery"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50" onClick={closeLightbox}>
          <div className="relative">
            <Image src={selectedImage} alt="Selected Road Image" className="h-auto max-w-full rounded-lg" />
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-white text-2xl font-bold cursor-pointer"><X className="text-gray-300 bg-gray-800" /></button>
          </div>
        </div>
      )}
    </div>
    // <div>
    //   <p>gagagsfsf</p>
    //   <div className="grid grid-cols-1 ">
    //     {items.map((item, i) => (
    //       <div key={i} className="relative w-full h-[350px]">
    //         <Image src={item} alt="" fill className="object-cov" />
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}