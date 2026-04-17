// TODO: User Zustand store — hold authenticated user profile, seller settings, subscription tier

import { create } from "zustand";
import type { User } from "@supabase/supabase-js";

interface UserState {
  user: User | null;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
}

export const useUserStore = create<UserState>()((set) => ({
  user: null,
  isLoading: true,
  setUser: (user) => set({ user }),
  setLoading: (isLoading) => set({ isLoading }),
}));
