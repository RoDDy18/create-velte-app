import { VelteElement, VelteRender } from "velte"

//components
import Layout from "./components/layout"
import Home from "./components/home"

//store
import { global } from "./store/global"

VelteRender(Layout(<Home $store={global}/>), document.getElementById("app"))