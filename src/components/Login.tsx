"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";

function LoginPage() {
  return (
    <div className=" bg-[#11A37F] h-screen flex flex-col justify-center items-center">
      <Image
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
      />
      <button
        onClick={() => signIn("google")}
        className="text-white text-2xl font-bold animate-pulse"
      >
        Sign In
      </button>
    </div>
  );
}

export default LoginPage;
