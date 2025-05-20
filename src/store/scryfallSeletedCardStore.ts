
import { create } from 'zustand';
import type { ScryfallMTGCard } from '../types/ScryfallObject';

interface ScryfallMTGCardState {
    data: ScryfallMTGCard,
    setData: (newData: ScryfallMTGCard)=> void;
}

const useScryfallMTGCardStore = create<ScryfallMTGCardState>((set) => ({
    data: {} as ScryfallMTGCard,
    setData: (newData: ScryfallMTGCard) => set({ data: newData }),
}));

export default useScryfallMTGCardStore;