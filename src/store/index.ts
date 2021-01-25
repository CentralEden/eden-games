import { createStore } from "vuex";
import { todos } from './Todo';

// export default Vuex.createStore({
export default createStore({
    state: {
        version: '1.0.0'
    },
    mutations: {},
    actions: {},
    modules: {
        todos
    }
});