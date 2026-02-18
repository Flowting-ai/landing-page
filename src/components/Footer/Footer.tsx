"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaXTwitter,
  FaInstagram,
  FaDiscord,
  FaLinkedinIn,
} from "react-icons/fa6";
import { HiOutlineArrowTurnDownRight } from "react-icons/hi2";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

const FOOTER_LINKS_PRODUCT = [
  {
    name: "Features",
    href: "/features",
    disabled: true,
  },
  {
    name: "Pricing",
    href: "/pricing",
    disabled: true,
  },
  {
    name: "Changelog",
    href: "/changelog",
    disabled: true,
  },
  // {
  //   name: "Docs",
  //   href: "/docs",
  //   disabled: true,
  // },
];
const FOOTER_LINKS_COMPANY = [
  {
    name: "About Us",
    href: "/about",
    disabled: true,
  },
  {
    name: "Terms of Service",
    href: "/terms-and-conditions",
    disabled: true,
  },
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
    disabled: true,
  },
  // {
  //   name: "Manage Cookies",
  //   href: "/Manage Cookies",
  //   disabled: true,
  // },
];
const FOOTER_LINKS_RESOURCES = [
  {
    name: "Videos",
    href: "/demo-videos",
    disabled: true,
  },
  {
    name: "Blogs",
    href: "/blogs",
    disabled: true,
  },
  {
    name: "Guides",
    href: "/guides",
    disabled: true,
  },
];
const FOOTER_LINKS_SOCIALS = [
  {
    name: "Twitter",
    href: "https://x.com/Flowtingai",
    disabled: false,
    icon: <FaXTwitter />,
  },
  {
    name: "Discord",
    href: "https://discord.gg/eXfnSe86dr",
    disabled: false,
    icon: <FaDiscord />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/flowting-ai/",
    disabled: false,
    icon: <FaLinkedinIn />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/flowtingai?igsh=MXJuYXl5bDc2NDk5Zw==",
    disabled: false,
    icon: <FaInstagram />,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sectionRef = useFadeInOnScroll<HTMLElement>();

  return (
    <footer
      ref={sectionRef}
      className="w-full h-auto mt-20 sm:mt-30 md:mt-40 lg:mt-50 overflow-hidden"
    >
      <div className="container mx-auto flex flex-col sm:flex-row px-0 md:px-4 lg:px-16">
        {/* Flowting AI Logo */}
        <div className="w-full lg:w-1/3 flex items-center sm:items-start justify-center sm:justify-start gap-4 px-4 mb-16">
          <Image
            src="./hero/FlowtingLogo.svg"
            alt="Flowting AI Logo"
            width={43}
            height={43}
            className="w-7 h-7 md:w-8 md:h-8 lg:w-10.75 lg:h-10.75"
          />
          <div className="flex flex-col">
            <h3 className="font-normal leading-[120%] text-2xl lg:text-[36px] text-black">
              FlowtingAI
              <br />
            </h3>
            {/* <p>Made with context.</p> */}
          </div>
        </div>

        {/* GRIDS */}
        <div className="w-full lg:w-2/3 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-2 ">
          {/* Product */}
          <div className="flex flex-col justify-start gap-4 px-4 sm:px-0 md:px-2 lg:px-4">
            <h3 className="font-normal text-lg lg:text-xl">Product</h3>
            <ul className="list-none w-full font-normal text-base lg:text-lg flex flex-col gap-2">
              {FOOTER_LINKS_PRODUCT.map(({ name, href, disabled }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className={`${disabled ? "pointer-events-none text-zinc-300" : "text-zinc-500 hover:text-black"} transition-all duration-300`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col justify-start gap-4 px-4 sm:px-0 md:px-2 lg:px-4">
            <h3 className="font-normal text-lg lg:text-xl">Resources</h3>
            <ul className="list-none w-full font-normal text-base lg:text-lg flex flex-col gap-2">
              {FOOTER_LINKS_RESOURCES.map(({ name, href, disabled }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className={`${disabled ? "pointer-events-none text-zinc-300" : "text-zinc-500 hover:text-black"} transition-all duration-300`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-2 sm:col-span-1 flex flex-col justify-start gap-4 px-4 sm:px-0 md:px-2 lg:px-4">
            <h3 className="font-normal text-lg lg:text-xl">Company</h3>
            <ul className="list-none w-full font-normal text-base lg:text-lg flex flex-col gap-2">
              {FOOTER_LINKS_COMPANY.map(({ name, href, disabled }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className={`${disabled ? "pointer-events-none text-zinc-300" : "text-zinc-500 hover:text-black"} transition-all duration-300`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials - Tablet/Desktop */}
          <div className="hidden sm:flex flex-col justify-start gap-4 px-4 sm:px-0 md:px-2 lg:px-4">
            <h3 className="font-normal text-lg lg:text-xl">Connect</h3>
            <ul className="list-none w-full font-normal text-base lg:text-lg flex flex-col gap-2">
              {FOOTER_LINKS_SOCIALS.map(({ name, href, disabled, icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${disabled ? "pointer-events-none text-zinc-300" : "text-zinc-500 hover:text-black"} flex items-center gap-2 transition-all duration-300`}
                  >
                    
                    {name}
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Socials - Mobile */}
        <div className="flex sm:hidden flex-col items-center gap-6 px-4 py-12">
          <h3 className="font-normal text-lg lg:text-3xl">Connect With Us</h3>
          <ul className="list-none w-full flex items-center justify-center gap-3 lg:gap-6 flex-wrap">
            {FOOTER_LINKS_SOCIALS.map(({ name, href, disabled, icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 border border-social-border rounded-2xl text-social-text bg-transparent transition-all duration-300 hover:bg-black hover:text-white hover:border-social-text hover:scale-110 active:scale-95"
                  title={name}
                >
                  <span className="text-lg lg:text-3xl">{icon}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="relative w-full h-auto text-center lg:text-left px-4 lg:px-16 py-10">
        <div className="container mx-auto text-balance text-sm lg:text-base text-footer-text flex flex-col lg:flex-row gap-4 pt-4">
          <div className="w-auto text-center md:text-left">
            <p className="">&copy; {currentYear} FlowtingAI. Made with context.</p>
            <p className="flex items-center justify-center lg:justify-start gap-2">
              <HiOutlineArrowTurnDownRight size={16} className="hidden md:block" />{" "}
              {`(Yes, an AI helped write this site. But a human approved it.)`}
            </p>
          </div>
        </div>
        <div className="-z-1 absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-120 h-120 bg-footer-elements/50 rounded-full blur-[60px]"></div>
        <div className="-z-2 absolute bottom-0 left-100 -translate-x-1/2 translate-y-1/2 w-120 h-120 bg-blue-100/50 rounded-full blur-[60px]"></div>
        <div className="-z-1 absolute bottom-0 right-0 translate-x-1/2 translate-y-2/3 w-120 h-120 bg-blue-100/50 rounded-full blur-[60px]"></div>
        <div className="-z-2 absolute bottom-0 right-100 translate-x-1/2 translate-y-2/3 w-120 h-120 bg-footer-elements/50 rounded-full blur-[60px]"></div>
      </div>
    </footer>
  );
}
