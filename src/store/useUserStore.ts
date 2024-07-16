import { create } from "zustand";
import { User } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
  logIn: (email: string, password: string) => Promise<void>;
}
const useUserStore = create<UserState>((set) => ({
  user: null,
  loading: false,
  error: null,

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
      set({ user: null, loading: false, error: "Somthing went wrong" });
    }
  },
}));

export default useUserStore;
