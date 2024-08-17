import { create } from "zustand";

export interface AboutUsType {
  title: string;
  descriptions: string;
  id?: string;
}

export interface ProjectType {
  title: string;
  descriptions: string;
  image: string;
  id?: string;
}
interface DataStoreType {
  aboutUs: AboutUsType[];
  projects: ProjectType[];
  setAboutUs: (groups: AboutUsType[]) => void;
  setProjects: (projects: ProjectType[]) => void;
}

export const useDataStore = create<DataStoreType>((set) => ({
  aboutUs: [],
  projects: [],
  setAboutUs: (aboutUsData: AboutUsType[]) => {
    set(() => {
      return {
        aboutUs: aboutUsData,
      };
    });
  },
  setProjects: (projects: ProjectType[]) => {
    set(() => {
      return {
        projects: projects,
      };
    });
  },
}));
