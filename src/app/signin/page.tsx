"use client";
import { signIn, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FunctionComponent } from "react";
import InstagramSignInButton from "../components/InstagramSignInButton";

interface SignInPageProps {}

const SignInPage: FunctionComponent<SignInPageProps> = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "";

  const { data: session, status } = useSession();

  switch (status) {
    case "authenticated":
      return <h1>Successfully signed in as @{session?.user?.name}</h1>;
    case "loading":
      return <p>Loading...</p>;
    case "unauthenticated":
      return (
        <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
          <div className="relative mt-12 sm:mt-16">
            <h1 className="text-center text-3xl font-medium tracking-tight">Sign in to your account</h1>
          </div>
          <div className="sm:rounded-5xl -mx-4 mt-5 flex-autopx-4 py-10 sm:mx-0 sm:flex-none sm:p-24">
            <InstagramSignInButton />
          </div>
        </div>
      );
  }
};

export default SignInPage;
