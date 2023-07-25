import { VelteElement } from "velte"

const Layout = (...children)=> {
    return (
        <div className="flex h-screen items-center justify-center font-poppins">
           {children} 
        </div>
    )
}

export default Layout