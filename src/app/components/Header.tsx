import Link from "next/link";
import { FunctionComponent } from "react";
import SignInButton from "./SignInButton";

import { raleway } from "../../../fonts";

import Image from "next/image";
import instagramIcon from "../../../public/instagram-icon.svg";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className="flex h-24 mt-4 flex-col justify-center" style={{ backgroundColor: "rgba(12, 20, 39, 0.54)" }}>
      <nav className="container">
        <ul
          className={`flex items-center px-6 justify-between gap-8 font-medium tracking-wider text-white ${raleway.className}`}
        >
          <li className="flex items-center">
            <a href="https://www.instagram.com/phuwaterwars2023/" target="_blank" className="me-2">
              <Image
                priority
                src={instagramIcon}
                className="my-auto w-10 h-full"
                style={{ filter: "drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))" }}
                alt="instagram"
              />
            </a>
            <Link href="/">PHU Water Wars</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/protected/server">Protected</Link>
          </li>
          <li>
            <SignInButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
