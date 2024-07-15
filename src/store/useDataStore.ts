import { create } from "zustand";

export interface AboutUsType {
  descriptions: string;
  title: string;
  id?: string;
}

interface DataStoreType {
  aboutUs: AboutUsType[];
  setAboutUs: (groups: AboutUsType[]) => void;
}

export const useDataStore = create<DataStoreType>((set) => ({
  aboutUs: [],
  setAboutUs: (aboutUsData: AboutUsType[]) => {
    set(() => {
      return {
        aboutUs: aboutUsData,
      };
    });
  },
}));
