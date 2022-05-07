import Footer from "./Footer"
import NavbarTest from "./NavbarTest"

const Layout = ({children, background}) => {

    return (
        <div className={"flex justify-center bg-stone-900 font-lato background-image " + background}>
            <div className="max-w-screen-lg flex flex-col min-h-screen w-full">
                <NavbarTest/>

                <div className="flex-grow container">{children}</div>
                <Footer/>
            </div>
        </div>
    )
}

export default Layout

