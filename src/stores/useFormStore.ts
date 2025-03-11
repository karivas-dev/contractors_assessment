import {createStore} from "zustand/vanilla";
import {persist} from "zustand/middleware";
import {
    ChallengeEnterpriseOptions,
    ChallengeNaturalOptions,
    ClientType,
    EnterpriseUserType,
    NaturalUserType,
    PassionType
} from "./dataTypes.ts";

type FormStore = {
    passion: PassionType | null,
    clientType: ClientType | null,
    userType: EnterpriseUserType | NaturalUserType | null,
    customUserType: string | null,
    challenge: ChallengeEnterpriseOptions | ChallengeNaturalOptions | null,
    user: {
        name: string | null,
        email: string | null,
        password: string | null,
        passwordConfirmation: string | null,
        phone: string | null,
        birthdate: string | null,
        gender: string | null,
        country: string | null,
        knowBy: string | null
    },
    setForm: (newState: Partial<FormStore>) => void,
    setUser: (newState: Partial<FormStore['user']>) => void
}

export const useFormStore = createStore<FormStore>()(
    persist(
        (set) => ({
            passion: null,
            clientType: null,
            userType: null,
            customUserType: null,
            challenge: null,
            user: {
                name: null,
                email: null,
                password: null,
                passwordConfirmation: null,
                phone: null,
                birthdate: null,
                gender: null,
                country: null,
                knowBy: null
            },
            setForm: (newState) => set((state) => ({...state, ...newState})),
            setUser: (newState) => set((state) => ({user: {...state.user, ...newState}})),
        }),
        {name: 'form-storage'}
    ),
);