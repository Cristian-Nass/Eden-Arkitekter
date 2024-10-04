import { create } from "zustand";
import { devtools } from "zustand/middleware";

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
  images?: string[];
}
interface DataStoreType {
  aboutUs: AboutUsType[];
  projects: ProjectType[];
  setAboutUs: (groups: AboutUsType[]) => void;
  setProjects: (projects: ProjectType[]) => void;
}

export const useDataStore = create<DataStoreType>()(
  devtools(
    (set) => ({
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
    }),
    { name: "UserStore" } // Optional: Name for the devtools instance
  )
);

// export const useDataStore = create<DataStoreType>((set) => ({
//   aboutUs: [],
//   projects: [],
//   setAboutUs: (aboutUsData: AboutUsType[]) => {
//     set(() => {
//       return {
//         aboutUs: aboutUsData,
//       };
//     });
//   },
//   setProjects: (projects: ProjectType[]) => {
//     set(() => {
//       return {
//         projects: projects,
//       };
//     });
//   },
// }));
