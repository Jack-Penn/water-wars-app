"use client";
import { FunctionComponent, useEffect } from "react";
// import { useState } from "react";
import { ImageProps } from "next/image";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";
// import { getProfilePicture } from "@/lib/instagram-puppeteer";
// import { getProfileImageUrl } from "../api/profile-picture/route";

interface InstagramProfilePictureProps extends Partial<ImageProps> {
  rounded?: boolean;
  username?: string;
}

const InstagramProfilePicture: FunctionComponent<InstagramProfilePictureProps> = async ({
  rounded,
  width = 150,
  height = 150,
  username,
  ...props
}) => {
  // let profilePicUrl = "/profile-pictures/default profile.jpg";
  // let setProfilePicUrl: any;

  // if (typeof window === "undefined") {
  //   //Server
  //   profilePicUrl = await getProfileImageUrl();
  // } else {
  //Client

  // let [profilePicUrl, setProfilePicUrl] = useState("/profile-pictures/default profile.jpg");
  // useEffect(() => {
  //   console.log("use effect");
  //   fetch(`/api/profile-picture?username${username}`)
  //     .then((res) => res.json())
  //     .then(({ src }) => {
  //       console.log("src: " + src);
  //       setProfilePicUrl(src);
  //     })
  //     .catch(console.error);
  // }, []);
  // }

  // return (
  //   <Image
  //     src="/profile-pictures/default profile.jpg"
  //     alt="Your Profile Picture"
  //     width={width}
  //     height={height}
  //     style={{ borderRadius: rounded ? "50%" : "0" }}
  //     {...props}
  //   />
  // );

  // return (
  //   // <Image
  //   //   src="/profile-pictures/default profile.jpg"
  //   //   alt="Your Profile Picture"
  //   //   width={150}
  //   //   height={150}
  //   //   style={{ borderRadius: "50%" }}
  //   // />

  // );

  return <p>test</p>;
};

export default InstagramProfilePicture;
