import { proxy, subscribe, snapshot } from 'valtio/vanilla'

export const global = proxy({ count: 0 })
