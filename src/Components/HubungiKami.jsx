import React from "react";
import { Phone, Mail } from "lucide-react";
import background from "../assets/HubungiPage/background.png";
import cardImage from "../assets/HubungiPage/imagecard.png";

const HubungiKami = () => {
  return (
    <div className="w-full mt-1">
      {/* Bagian Atas: Hero Section */}
      <div
        className="w-full bg-cover bg-center py-32 text-center text-black"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-yellow-400 bg-opacity-60 inline-block px-4 py-1 text-sm font-semibold rounded-md">
          Tertarik?
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Silahkan <br /> Hubungi Kami
        </h2>
      </div>

      {/* Bagian Bawah: Kontak & Form */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-20">
        {/* Kartu Kontak */}
        <div className="relative rounded-2xl overflow-hidden text-white shadow-xl">
          <div
            className="bg-opacity-60 p-8 h-full flex flex-col justify-between"
            style={{
              backgroundImage: `url(${cardImage})`,
              backgroundPosition: "center",
            }}
          >
            <div>
              <div className="inline-block bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded mb-3">
                Siapa Kami?
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Jangan ragu untuk menghubungi kami.
              </h3>
              <p className="mb-4 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <hr className="border-yellow-400 border-t-2 w-full" />
            </div>
            <div className="space-y-6"> 
              <div className="flex items-start gap-3">
                <div className="bg-yellow-400 p-3 rounded-full">
                  <Phone className="text-black" size={25} />
                </div>
                <div>
                  <p className="font-bold">Aurellia - Sekretaris 1</p>
                  <p className="text-sm">080132114212</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-yellow-400 p-3 rounded-full">
                  <Phone className="text-black" size={25} />
                </div>
                <div>
                  <p className="font-bold">Kayla - Sekretaris 2</p>
                  <p className="text-sm">080132114212</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-yellow-400 p-3 rounded-full">
                  <Mail className="text-black" size={25} />
                </div>
                <div>
                  <p className="font-bold">Contact Us!</p>
                  <p className="text-sm">blugku@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Kirim Pesan */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-6">Kirim Kami Pesan</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nama"
                className="border p-3 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Telepon"
                className="border p-3 rounded-md w-full"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded-md"
            />
            <input
              type="text"
              placeholder="Subjek"
              className="w-full border p-3 rounded-md"
            />
            <textarea
              placeholder="Pesan"
              rows="4"
              className="w-full border p-3 rounded-md"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-md transition duration-300"
            >
              KIRIM
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HubungiKami;
