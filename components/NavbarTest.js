import { useEffect, useState } from "react";
import Link from "next/link"
import NextImage from "./Image"
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

export default function NavbarTest() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [mounted, setMounted] = useState(false)

  const {theme, setTheme} = useTheme();
  const [textColorCodes, setTextColorCodes] = useState({primary: 800, secondary: 700});
  useEffect(() => {
    setTextColorCodes(theme === 'dark' ? {primary: 100, secondary: 300} : {primary: 800, secondary: 700});
    setMounted(true)

  }, [theme])


  const router = useRouter()

  const goToPage = (link) => {
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
                src={theme === 'dark' ? '/logo_licht.png' : '/logo.png'}
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

            <svg className={`h-8 w-8 text-gray-${textColorCodes.primary}`}  fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <ul className={"flex flex-col lg:flex-row list-none lg:ml-auto "}>

              <li className="nav-item">
                <a
                    className={`px-4 py-2 flex items-center text-xs uppercase leading-snug hover:opacity-75 hover:cursor-pointer text-gray-${textColorCodes.primary}`}
                    onClick={() => goToPage('/galerij')}
                >
                  <i className="text-lg leading-lg opacity-75"></i><span className={`text-gray-${textColorCodes.primary} ml-2`}>GALERIJ</span>
                </a>
              </li>

              <li className="nav-item">
                <a
                    className={`px-4 py-2 flex items-center text-xs uppercase leading-snug hover:opacity-75 hover:cursor-pointer text-gray-${textColorCodes.primary}`}
                    onClick={() => goToPage('/over-mij')}
                >
                  <i className="text-lg leading-lg opacity-75"></i><span className={`text-gray-${textColorCodes.primary} ml-2`}>OVER MIJ</span>
                </a>
              </li>


              {mounted &&
                  <li className="nav-item">
                    <a
                        className={`float-right md:float-none px-4 py-2 flex items-center text-xs uppercase leading-snug hover:opacity-75 hover:cursor-pointer text-gray-${textColorCodes.primary}`}
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    >
                      <i className="text-lg leading-lg opacity-75"></i><span
                    ><NextImage
                        src={theme === 'dark' ? '/moon_white.png' : '/moon.png'}
                        width={15}
                        height={15}
                    ></NextImage> </span>
                    </a>
                  </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}