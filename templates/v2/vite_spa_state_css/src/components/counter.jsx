import { VelteComponent, VelteElement } from "velte"
import { global } from "../store/global"

export default class Counter extends VelteComponent{
    addGlobal = ()=>{
        global.dispatch("add")
    }

    render(){
        return (
            <button v-on:click={this.addGlobal} className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-primary_light focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-80">Count is {global.state.count}</button>
        )
    }
}