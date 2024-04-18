import { configureStore } from "@reduxjs/toolkit";

import homeRedcuer from "./modules/home";

const store = configureStore({
    reducer: {
        home: homeRedcuer
    }
})

export default store