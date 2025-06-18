import { create } from 'zustand';

interface BearState {
    navigation: string;
}

export const useNavationStore = create<BearState>((set) => ({
    navigation: '',
}));
