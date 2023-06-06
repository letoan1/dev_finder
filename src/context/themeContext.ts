import React, { createContext } from "react";

export type ThemeType = "light" | "dark";

interface ThemeContextType {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: () => {},
});
