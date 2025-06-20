import { create } from 'zustand';

interface BearState {
    navigation2: string;
    navigation1: string;
}

export const useNavationStore = create<BearState>((set) => ({
    navigation2: '',
    navigation1: '',
    setNavigation1: (value: 'about' | 'prof' | 'roadmap') => set({ navigation1: value }),
    setNavigation2: (value: 'community' | 'ambassador' | 'reviews') => set({ navigation2: value }),
}));
