"use client";

import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FunctionComponent, useEffect } from "react";

interface ClientProtectPageProps {}

const ClientProtectPage: FunctionComponent<ClientProtectPageProps> = () => {
  interface ExtendedSession extends Session {
    userId: string;
    accessToken: string;
  }

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signin?callbackUrl=/protected/client");
    },
  }) as { update: any; data: ExtendedSession; status: string };

  if (status === "authenticated") {
    console.log(session);
    // const URL = `https://graph.instagram.com/${session.userId}?fields=id,username&access_token=${session.accessToken}`;
    // const URL = `https://graph.instagram.com//me?fields=id,username&access_token=${session.accessToken}`;
    // const URL = `https://graph.instagram.com/me/media?fields=id,media_url&access_token=${session.accessToken}`;
    // const URL = `https://graph.facebook.com/v17.0/${session.userId}?fields=profile_pic&access_token=496841382620028|9a5380ad52adfd17914190041e7cc101`;
    // const URL = `https://www.instagram.com/${session!.user!.name}/?__a=1`;

    // fetch(URL, {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // Handle the response data here
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     // Handle any errors that occurred during the fetch
    //     console.error("Error:", error);
    //   });
  }

  return (
    <div>
      <Link href="/protected/server" className="tb-5">
        Go To Protected Server Page
      </Link>
      <h1 className="text-2xl font-bold">Protected Authenticated Client Page</h1>
      <h2 className="font-medium">You are logged in as: {session?.user?.name}</h2>
    </div>
  );
};

export default ClientProtectPage;
