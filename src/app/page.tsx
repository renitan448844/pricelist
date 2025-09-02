"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const priceList = [
    { service: "Cuci Satuan Premium",  image: "/asset/Price1.jpeg" },
    { service: "Laundry Services", image: "/asset/Price2.jpeg" },
    { service: "Event 17 Agustus", image: "/asset/Price3.jpeg" },
    { service: "Diskon Harian", image: "/asset/Price4.jpeg" },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-50">
      <header className="w-full bg-[#1976D2] py-6 text-center text-white shadow-lg">
        <h1 className="text-3xl font-bold">Laundry Express Solo - EVEWASH</h1>
        <p className="text-sm opacity-90 mt-1">Daftar Harga Laundry</p>
      </header>

      <section className="flex-1 w-full p-6 flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {priceList.map((item, index) => (
            <div
              key={index}
              className="w-60 bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-2xl hover:scale-105 transition transform duration-300 mx-auto cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="relative w-full h-70">
                <Image
                  src={item.image}
                  alt={item.service}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-lg font-bold text-gray-800">{item.service}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[90%] max-w-2xl h-[80%] bg-transparent">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-60 text-white bg-gray-800 bg-opacity-60 hover:bg-opacity-80 rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
            >
              &times;
            </button>
            <div className="relative w-full h-full p-4">
              <Image
                src={selectedImage}
                alt="Full Preview"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      <footer className="w-full bg-[#0D47A1] py-5 text-center text-gray-200 text-sm">
        © {new Date().getFullYear()} Laundry Express Solo. Semua Hak Dilindungi.
      </footer>
    </main>
  );
}
