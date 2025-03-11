import PassionSelector from "../passionSelector.tsx";
import {createStore} from "zustand/vanilla";
import {persist} from "zustand/middleware";
import ClientSelector from "../clientSelector.tsx";
import StudentForm from "../studentForm.tsx";
import * as React from "react";
import UserType from "../userType.tsx";
import Challenge from "../challenge.tsx";

const pages = {
    passionSelector: PassionSelector,
    clientSelector: ClientSelector,
    userType: UserType,
    studentForm: StudentForm,
    challenge: Challenge,
}

export const useViewStore = createStore<{
    viewTree: (keyof typeof pages)[], // Array of keys of pages
    setCurrentView: (newView: keyof typeof pages) => void,
    getCurrentView: () => React.FC,
    overrideViewTree: (newView: keyof typeof pages) => void,
    canGoBack: () => boolean,
    goBack: () => void
}>()(
    persist(
        (set, get) => ({
            viewTree: ['passionSelector'], // Default starting view
            setCurrentView: (newView) => set(state => ({viewTree: [...state.viewTree, newView]})), // Appending new view
            getCurrentView: () => pages[get().viewTree[get().viewTree.length - 1]], // Get the current view
            overrideViewTree: (newView) => set({viewTree: [newView]}), // Override the view tree
            canGoBack: () => get().viewTree.length > 1, // Can go back if stepTree has more than 1 element
            goBack: () => set(state => ({viewTree: state.viewTree.slice(0, -1)})) // Remove last element from stepTree
        }),
        {name: 'view-storage'}
    )
);
