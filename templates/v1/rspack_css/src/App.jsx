import { VelteElement, VelteRender } from "velte"
import "./misc/theme"
import "./main.css"

//components
import Layout from "./components/layout"
import Home from "./components/home"

VelteRender(Layout(<Home/>), document.getElementById("app"))