'use client'
import Image from "next/image";
import { Pacifico } from "next/font/google";
import { useState } from "react";
const pacifico = Pacifico({
  subsets: ["cyrillic"],
  weight: "400",
});
export default function Home() {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  return (
    <main className={`flex flex-col items-center p-4 mt-40 `}>
      <h1 className={`text-[44px] text-pink-300 ${pacifico.className}`}>
        Уулзах уу яах уу ?
      </h1>
      <h3 className={`text-[24px] mt-6 text-pink-400 ${pacifico.className}`}>
        Аймар санаад байх юоом.
      </h3>
      <div className="mt-4 flex gap-4 mt-16">
        <button
          onClick={() => {
            setError('')
            setSuccess("CALL ME BEEEB 😘")
          }}
          className="px-4 py-2 rounded-xl bg-pink-300 text-black"
        >
          Тэгье
        </button>
        <button
          onClick={() => {
            setSuccess("")
            setError("Та энэ сонголтыг хийх боломжгүй байна")
          }}
          className="px-4 py-2 border border-gray-600 rounded-xl"
        >
          Дараа больё
        </button>
      </div>
      {success && <p className="text-green-400 mt-10 font-medium">{success}</p>}
      {error && <p className="text-red-400 mt-10">{error}</p>}
    </main>
  );
}
