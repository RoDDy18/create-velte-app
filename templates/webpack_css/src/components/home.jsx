import { VelteElement } from "velte"
import logo from "../assets/images/velte4.png"
import Counter from "./counter"

const Home = ({})=> {
    return (
        <div className="text-center p-10">
            <a href="https://veltejs.cyclic.app"><img className="block m-auto mb-4 sm:w-48 w-32 h-auto" src={logo}/></a>
            <h1 className="text-slate-800 font-bold sm:text-6xl mb-10 text-4xl dark:text-gray-200">Velte App</h1>
            <div className="mb-4 flex gap-5 justify-center flex-col md:flex-row md:px-10">
                <Counter/>
            </div>
            <p className="mb-20 inline-block">Edit <span className="font-source">src/App.jsx</span> and save to test HMR</p>
            <p className="text-gray-400">Click on the Velte logo to learn more</p>
        </div>
    )
}

export default Home