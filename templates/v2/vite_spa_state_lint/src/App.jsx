import { VelteElement, VelteRender } from "velte"
import {router, query} from "./router/index"

//components
import Layout from "./components/layout"

//routes
import Home from "./routes/home"
import About from "./routes/about"
import NotFound from "./routes/404"

//store
import { global } from "./store/global"

router.get("/", function(req, router){
    renderPage(Layout(<Home $store={global}/>))
}).setName("Home")

router.get("/about", function(req, router){
    renderPage(Layout(<About/>))
}).setName("About")

router.notFoundHandler(function(){
    renderPage(Layout(<NotFound/>))
})

const renderPage = (page)=>{
    VelteRender(page, document.getElementById("app"))
}

router.init()