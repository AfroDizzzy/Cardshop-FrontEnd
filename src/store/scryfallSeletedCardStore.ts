
import { create } from 'zustand';
import type { ScryfallMTGCard } from '../types/ScryfallObject';


const useScryfallMTGCardStore = create((set) => ({
    data: {} as ScryfallMTGCard,
    setData: (newData: ScryfallMTGCard) => set({ data: newData }),
}));

export default useScryfallMTGCardStore;