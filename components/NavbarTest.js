import { useState } from "react";
import Link from "next/link"
import NextImage from "./Image"
import { useRouter } from "next/router";

export default function NavbarTest() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const router = useRouter()

  const goToPage = async (link) => {
    setNavbarOpen(false);
    router.push(link);
  }

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div className="container md:px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <a className="xs:w-3/5">
              <NextImage
                src="/logo.png"
                alt="home"
                className="logo"
                height="80"
                width="250"
              />
            </a>
          </Link>
            <a
              className="text-white cursor-pointer text-xl self-center leading-none px-3 py-1 pr-0 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >

            <svg className="h-8 w-8 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
            </svg>

            </a>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center justify-end" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className={"flex flex-col lg:flex-row list-none lg:ml-auto " + (navbarOpen &&  "bg-yellow-500 rounded")}>
              <li className="nav-item">
                <a
                  className="px-4 py-2 flex items-center text-xs uppercase leading-snug text-white hover:opacity-75 hover:cursor-pointer"
                  onClick={() => goToPage('/over-mij')}
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">OVER MIJ</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-4 py-2 flex items-center text-xs uppercase leading-snug text-white hover:opacity-75 hover:cursor-pointer"
                  onClick={() => goToPage('/galerij')}
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">GALERIJ</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}