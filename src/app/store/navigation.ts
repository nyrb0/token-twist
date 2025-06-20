import { create } from 'zustand';

export interface BearState {
    navigation2: string;
    navigation1: string;
    setNavigation1: (value: 'О компании' | 'Токеномика' | 'RoadMap') => void;
    setNavigation2: (value: 'Соц-сети' | 'Амабасдор' | 'Отзывы') => void;
}

export const useNavationStore = create<BearState>((set) => ({
    navigation2: 'Соц-сети',
    navigation1: 'О компании',
    setNavigation1: (value) => set({ navigation1: value }),
    setNavigation2: (value) => set({ navigation2: value }),
}));
