import { VelteElement, VelteRender } from "velte"
import "./misc/theme"
import "./main.css"

//components
import Layout from "./components/layout"
import Home from "./components/home"

//store
import { global } from "./store/global"

VelteRender(Layout(<Home $store={global}/>), document.getElementById("app"))