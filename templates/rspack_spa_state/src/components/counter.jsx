import { VelteComponent, VelteElement } from "velte";
import { snapshot } from "valtio/vanilla"
import { global } from "../store/global"

export default class Counter extends VelteComponent{
    constructor(traits){
        super(traits)

        this.state = {
            count : 0
        }

        this.add = ()=> {
            this.setState({count: this.state.count + 1})
        }

        this.addGlobal = ()=>{
            global.count++
            this.reactToState()
        }
    }

    render(){
        const state = snapshot(global)
        return (
            <button v-on:click={this.addGlobal} className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-primary_light focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-80">Count is {state.count}</button>
        )
    }
}