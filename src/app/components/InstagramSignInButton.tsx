"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FunctionComponent } from "react";

import Image from "next/image";
import instagramIcon from "../../../public/instagram-icon.svg";

interface InstagramSignInButtonProps {}

const InstagramSignInButton: FunctionComponent<InstagramSignInButtonProps> = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  return (
    <button
      className="w-full h-14 p-2 bg-white text-black rounded-2xl flex justify-around shadow-2xl"
      onClick={() => signIn("instagram", { callbackUrl })}
    >
      <Image
        priority
        src={instagramIcon}
        className="my-auto w-auto h-full"
        // style={{ filter: "drop-shadow(0px 0px 2px rgba(0,0,0,0.5))" }}
        alt="instagram"
      />
      <div className="my-auto font-bold text-xl">Login with Instagram</div>
    </button>
  );
};

export default InstagramSignInButton;
