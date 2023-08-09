import { VelteElement } from "velte"

const NotFound = ({})=> {
    return (
        <div className="text-center p-10">
            <h1 className="text-slate-800 font-bold sm:text-6xl mb-10 text-4xl dark:text-gray-200">404</h1>
            <p className="mb-4 inline-block">We can't find that page</p>
            <div className="mb-20 flex gap-5 justify-center flex-col md:flex-row md:px-10">
                <a href="/" className="flex gap-2 items-center px-6 py-2 font-medium tracking-wide capitalize transition-colors duration-300 transform rounded-lg text-primary hover:text-black dark:hover:text-white justify-center"><i className="i-uil-arrow-circle-left text-xl"></i> <span class="mx-1">Back Home</span></a>
            </div>
        </div>
    )
}

export default NotFound