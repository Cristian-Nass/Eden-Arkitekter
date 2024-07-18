import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import ProjectsPage from "./pages/ProjectsPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { collection, getDocs } from "firebase/firestore";
import { database } from "./firebase/firebase";
import { useDataStore } from "./store/useDataStore";
import { AboutUsType } from "./store/useDataStore";
import "./App.css";
import MainPage from "./pages/admin/MainPage";
import EditPage from "./pages/admin/EditPage";
import EditAboutUs from "./pages/admin/EditAboutUs";
import EditProject from "./pages/admin/EditProject";
import { auth } from "./firebase/firebase";
import useUserStore from "./store/useUserStore";

function App() {
  const { setAboutUs } = useDataStore();
  const { setIsAdmin } = useUserStore();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userDoc) => {
      if (userDoc) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
      console.log("User Doc: ------>", userDoc);
    });
    return unsubscribe;
  }, [setIsAdmin]);

  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(database, "about-us"));
      const aboutUsData: AboutUsType[] = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        // const au: AboutUsType = {
        //   ...doc.data(),
        // };
        aboutUsData.push({ ...doc.data(), id: doc.id } as AboutUsType);
      });
      setAboutUs(aboutUsData);
    };
    getData();
  }, [setAboutUs]);
  const theme = createTheme({
    palette: {
      primary: {
        light: "#cfe1b9",
        main: "#97a97c",
        dark: "#718355",
        contrastText: "#e9f5db",
      },
      secondary: {
        light: "#b2d3a8",
        main: "#52b788",
        dark: "#498467",
        contrastText: "#000",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactUsPage />} />
          <Route path='/administration'>
            <Route index element={<MainPage />} />
            <Route path='edit'>
              <Route index element={<EditPage />} />
              <Route path='about-us' element={<EditAboutUs />} />
              <Route path='project' element={<EditProject />} />
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
