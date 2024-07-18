import { create } from "zustand";
import { User } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
  logIn: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
}
const useUserStore = create<UserState>((set) => ({
  user: null,
  loading: false,
  error: null,
  isAdmin: false,

  setIsAdmin: async (isAdmin: boolean) => {
    try {
      if (isAdmin) {
        set({ isAdmin: true });
      } else {
        set({ isAdmin: false });
      }
    } catch (error) {
      set({ isAdmin: false });
    }
  },

  logIn: async (email: string, password: string) => {
    set({ loading: true, error: null });
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      set({ user: userCredential.user, loading: false, error: null });
    } catch (error) {
      set({
        user: null,
        isAdmin: false,
        loading: false,
        error: "Somthing went wrong",
      });
    }
  },

  logOut: async () => {
    set({ loading: true, error: null });
    try {
      await auth.signOut();
      set({ user: null, isAdmin: false, loading: false, error: null });
    } catch (error) {
      set({ loading: false, error: "Somthing went wrong" });
    }
  },
}));

export default useUserStore;
