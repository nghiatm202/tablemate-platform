import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { LocalKeys } from "@/constants";

type TAuthStoreState = {
  userInfo: TAuthData;
  setUserInfo: (user: TAuthData) => void;
  removeUserInfo: () => void;
};

const userInfo: TAuthData = {
  userId: "",
  phone: "",
};

export const useAuthStore = create<
  TAuthStoreState,
  [["zustand/persist", { userInfo: TAuthData }]]
>(
  persist(
    (set, get) => ({
      userInfo,
      setUserInfo: (user: any) =>
        set({ userInfo: { ...get().userInfo, ...user } }),
      removeUserInfo: () => {
        set({
          userInfo,
        });
        localStorage.removeItem(LocalKeys.USER_INFO);
      },
    }),
    {
      name: LocalKeys.USER_INFO,
      storage: createJSONStorage(() => localStorage),
    }
  )
);
