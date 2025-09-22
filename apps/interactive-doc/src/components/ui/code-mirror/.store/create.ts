import { createStore } from "@xstate/store"
import { databaseStoreSamples } from "./data-samples"

export const databaseStore = createStore({
  context: databaseStoreSamples,
  on: {
    // addDonut: (context) => ({
    //   ...context,
    //   donuts: context.donuts + 1,
    // }),
    // changeFlavor: (context, event: { flavor: string }) => ({
    //   ...context,
    //   favoriteFlavor: event.flavor,
    // }),
    // eatAllDonuts: (context) => ({
    //   ...context,
    //   donuts: 0,
    // }),
  },
})
