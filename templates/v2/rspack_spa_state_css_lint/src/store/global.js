import { velX } from "velte"

export const global = new velX({
    state: {
        count: 0
    },
    actions:{
        add(context){
            context.commit("add")
        }
    },
    mutations:{
        add(state){
            state.count = state.count + 1
            return state
        }
    }
})
