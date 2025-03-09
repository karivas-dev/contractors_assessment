import {create} from 'zustand'
import * as React from "react";
import Start from "../start.tsx";

export const useViewStore = create<{
    CurrentView: React.FC,
    setView: (newView: React.FC) => void,
}>((set) => ({
    CurrentView: Start,
    setView: (newView: React.FC) => set({CurrentView: newView}),
}))