"use client";
import { useSearchParams } from "next/navigation";
import { FunctionComponent } from "react";

interface AuthErrorPageProps {}

const AuthErrorPage: FunctionComponent<AuthErrorPageProps> = () => {
  const error = useSearchParams().get("error");
  return (
    <div>
      <h1>An Error Has Occured</h1>
      <p>{error}</p>
    </div>
  );
};

export default AuthErrorPage;
