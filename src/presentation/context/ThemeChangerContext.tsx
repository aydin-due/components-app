import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router";
import { useColorScheme } from "nativewind";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

interface ThemeChangerContextType {
    currentTheme: 'light' | 'dark'
    isSystemTheme: boolean
    toggleTheme: () => void
    setSystemTheme: () => void
}

const ThemeChangerContext = createContext({} as ThemeChangerContextType)

// custom hook for accessing theme changer context
export const useThemeChangerContext = () => {
    const themeChanger = useContext(ThemeChangerContext)
    return themeChanger;
}

// provider
export const ThemeChangerProvider = ({ children }: PropsWithChildren) => {
    const { colorScheme, setColorScheme } = useColorScheme();
    const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark')
    const [isSystemModeEnabled, setIsSystemModeEnabled] = useState(true)

    const currentTheme = isSystemModeEnabled ? colorScheme : (isDarkMode) ? 'dark' : 'light'

    useEffect(() => {
        AsyncStorage.getItem('selected-theme').then((theme) => {
            if (!theme) return;
            setIsDarkMode(theme === 'dark')
            setIsSystemModeEnabled(theme === 'system')
            setColorScheme(theme as 'light' | 'dark' | 'system')
        })

    }, [])


    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <ThemeChangerContext.Provider value={{
                currentTheme: currentTheme ?? 'light',
                isSystemTheme: isSystemModeEnabled,
                toggleTheme: async () => {
                    setColorScheme(isDarkMode ? 'light' : 'dark')
                    setIsDarkMode(!isDarkMode)
                    setIsSystemModeEnabled(false)
                    await AsyncStorage.setItem('selected-theme', isDarkMode ? 'dark' : 'dark')
                },
                setSystemTheme: async () => {
                    setIsSystemModeEnabled(true)
                    setColorScheme('system')
                    await AsyncStorage.setItem('selected-theme', 'system')
                }
            }}>{children}</ThemeChangerContext.Provider>
        </ThemeProvider>

    )
}