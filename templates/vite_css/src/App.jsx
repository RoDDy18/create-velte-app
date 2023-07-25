import { VelteElement, VelteRender } from "velte"

//components
import Layout from "./components/layout"
import Home from "./components/home"

VelteRender(Layout(<Home/>), document.getElementById("app"))