import SPARouter from "@kodnificent/sparouter"

const options = {
    historyMode : true,
    caseInsensitive: false
}

export const router = new SPARouter(options)

export const query = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
})