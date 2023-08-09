import { VelteElement } from "velte"
import logo from "../assets/images/velte4.png"
import Counter from "../components/counter"

const Home = ({})=> {
    return (
        <div className="text-center p-10">
            <a href="https://veltejs.cyclic.app"><img className="block m-auto mb-4 sm:w-48 w-32 h-auto" src={logo}/></a>
            <h1 className="text-slate-800 font-bold sm:text-6xl mb-10 text-4xl dark:text-gray-200">Velte App</h1>
            <div className="mb-4 flex gap-5 justify-center flex-col md:flex-row md:px-10">
                <Counter/>
                <a href="/about" className="flex gap-2 items-center px-6 py-2 font-medium tracking-wide capitalize transition-colors duration-300 transform border-primary border-2 rounded-lg hover:bg-primary_light focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-80 text-primary hover:text-white hover:border-primary_light justify-center"><span class="mx-1">About</span> <i className="i-uil-arrow-circle-right text-xl"></i></a>
            </div>
            <p className="mb-20 inline-block">Edit <span className="font-source">src/App.jsx</span> and save to test HMR</p>
            <p className="text-gray-400">Click on the Velte logo to learn more</p>
        </div>
    )
}

export default Home