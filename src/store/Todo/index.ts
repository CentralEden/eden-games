import { Module } from 'vuex';
import { TodosState, RootState } from '@/store/types';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state: TodosState = {
    todos: [],
};

export const todos: Module<TodosState, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};