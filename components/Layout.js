import Footer from "./Footer"
import NavbarTest from "./NavbarTest"

const Layout = ({children}) => {

    return (
        <div className={"flex justify-center font-lato background-image"}>
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

