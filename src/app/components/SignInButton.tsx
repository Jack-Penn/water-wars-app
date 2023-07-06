"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { FunctionComponent, useEffect, useState } from "react";
import InstagramProfilePicture from "./InstagramProfilePicture";

interface SignInButtonProps {}

const SignInButton: FunctionComponent<SignInButtonProps> = () => {
  const { data: session, status } = useSession();
  // let [isSignedIn, setIsSignedIn] = useState(status == "authenticated");
  switch (status) {
    case "authenticated":
      return (
        <div>
          <div>
            <h1>@{session?.user?.name}</h1>
            <button onClick={() => signOut()}>Sign Out</button>
          </div>
          <InstagramProfilePicture />
          {/* <InstagramProfilePicture rounded /> */}
        </div>
      );
    case "loading":
      return <p>Loading...</p>;
    case "unauthenticated":
      return <button onClick={() => signIn()}>Sign In</button>;
  }
};

export default SignInButton;
