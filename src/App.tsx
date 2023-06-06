import { useEffect, useState } from "react";
import Header from "./components/Header";
import InfoUser from "./components/InfoUser";
import SearchInput from "./components/Search";
import { initialInfoUser } from "./components/Search";
import { UserContext } from "./context/UserContext";
import { ThemeContext, ThemeType } from "./context/themeContext";
import "./App.css";

function App() {
  const [dataUser, setDataUser] = useState(initialInfoUser);
  const [theme, setTheme] = useState<ThemeType>("dark");

  const contextValue = {
    theme: theme,
    setTheme: setTheme,
  };

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <UserContext.Provider value={{ dataUser, setDataUser }}>
        <div className={theme === "light" ? "App" : "app__dark"}>
          <div className="container">
            <Header onClick={handleChangeTheme}></Header>
            <SearchInput></SearchInput>
            <InfoUser></InfoUser>
          </div>
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
