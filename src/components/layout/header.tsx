'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

type HeaderProps = {
  logoSrc?: string;
  logoAlt?: string;
  facebookUrl?: string;
  phoneNumber?: string;
};

export default function Header({
  logoSrc = "/logo.svg",
  logoAlt = "AK Valeting",
  facebookUrl = "https://www.facebook.com/AKMValeting",
  phoneNumber = "07951 803181",
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 z-50 w-screen py-1 sm:py-2.5 transition-colors duration-300 ${
        scrolled ? "bg-foreground" : "bg-black/0"
      }`}
    >
      <div className="wrapper">
        <div className="container flex items-center justify-between">
          <Link href="/" className="shrink-0">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={148}
              height={60}
              className="h-16 w-auto"
              priority
            />
          </Link>

          <div className="flex items-center gap-4">
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              className="flex justify-center items-center h-10 w-10 bg-[#1877F2] rounded-lg text-white text-xl leading-6 transition hover:brightness-120"
            >
              <i className="fa fa-facebook-f" />
            </a>

            <a
              href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
              className="flex items-center gap-2.5 px-3 py-2 bg-black/48 rounded-lg text-base font-bold leading-6 text-white/80 transition hover:bg-black hover:text-white"
              aria-label={`Call us on ${phoneNumber}`}
            >
              <div className="flex items-center h-6">
                <i className="fa fa-phone" />
              </div>
              <span className="hidden sm:inline">{phoneNumber}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}