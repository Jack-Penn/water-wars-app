import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FunctionComponent } from "react";
import { getProfilePicture } from "@/lib/instagram-puppeteer";
import axios from "axios";
import { Agent } from "https";
import Image from "next/image";
import InstagramProfilePicture from "@/app/components/InstagramProfilePicture";

interface ProtectedServerPageProps {}

const ProtectedServerPage: FunctionComponent<ProtectedServerPageProps> = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin?callbackUrl=/protected/server");
  }

  return (
    <div>
      <Link href="/protected/client" className="tb-5">
        Go To Protected Client Page
      </Link>
      <h1 className="text-2xl font-bold">Protected Authenticated Server Page</h1>
      <h2 className="font-medium">You are logged in as: {session?.user?.name}</h2>
      {/* <InstagramProfilePicture rounded /> */}
    </div>
  );
};

export default ProtectedServerPage;
