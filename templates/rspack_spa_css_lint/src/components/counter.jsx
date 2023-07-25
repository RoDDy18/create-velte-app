import { VelteComponent, VelteElement } from "velte";

export default class Counter extends VelteComponent{
    constructor(traits){
        super(traits)

        this.state = {
            count : 0
        }

        this.add = ()=> {
            this.setState({count: this.state.count + 1})
        }
    }

    render(){
        return (
            <button v-on:click={this.add} className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-primary_light focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-80">Count is {this.state.count}</button>
        )
    }
}