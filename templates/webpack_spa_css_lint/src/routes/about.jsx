import { VelteElement } from "velte"
import Info from "../components/info"

const About = ({})=> {
    return (
        <div className="text-center p-10">
            <h1 className="text-slate-800 font-bold sm:text-6xl mb-10 text-4xl dark:text-gray-200">About Project</h1>
            <p className="mb-4 inline-block">Welcome to your new velte project, the power to create any app interface is <span className="font-semibold">literally</span> at your fingertips!</p>
            <div className="mb-20 flex gap-5 justify-center flex-col md:flex-row md:px-10">
                <a href="/" className="flex gap-2 items-center px-6 py-2 font-medium tracking-wide capitalize transition-colors duration-300 transform rounded-lg text-primary hover:text-black dark:hover:text-white justify-center"><i className="i-uil-arrow-circle-left text-xl"></i> <span class="mx-1">Back Home</span></a>
            </div>
            <div className="flex justify-center md:absolute md:left-5 md:bottom-5"><Info/></div>
        </div>
    )
}

export default About