import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { getProfilePicture } from "@/lib/instagram-puppeteer";

export async function GET(req: NextRequest) {
  return NextResponse.json({ src: getProfileImageUrl(new URL(req.url).searchParams.get("username")) });
}

export async function getProfileImageUrl(username: string | null | undefined = undefined) {
  if (!username) {
    const session = await getServerSession(authOptions);
    username = session?.user?.name;
  }

  if (username) {
    const profilePicUrl = await getProfilePicture(username);
    if (profilePicUrl) return profilePicUrl;
  }
  return "/profile-pictures/default profile.jpg";
}
