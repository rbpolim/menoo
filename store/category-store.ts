import { create } from 'zustand'

type CategoryStore = {
  category: string
  setCategory: (category: string) => void
  removeCategory: () => void
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  category: "all",
  setCategory: (category: string) => set({ category }),
  removeCategory: () => set({ category: "all" }),
}))