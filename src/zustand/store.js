import { create } from "zustand";

const useEventModalStore = create((set) => ({
  isOpen: false,
  setShowRegistrationModal: (value) => set({ isOpen: value }),
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export { useEventModalStore };
