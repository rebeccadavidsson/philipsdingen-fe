import Footer from "./Footer"
import NavbarTest from "./NavbarTest"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Layout = ({children}) => {
    const {theme} = useTheme();
    const [backgroundColor, setBackgroundColor] = useState('');
    useEffect(() => {
        setBackgroundColor(theme === 'dark' ? 'custom-dark' : 'custom-white')
    }, [theme])

    return (
        <div className={`flex justify-center font-lato background-image bg-${backgroundColor}`}>
            <div className={"animated-shapes"}></div>
            <div className="relative max-w-screen-lg flex flex-col min-h-screen w-full">
                <NavbarTest/>

                <div className="flex-grow container">{children}</div>
                <Footer/>
            </div>
        </div>
    )
}

export default Layout

