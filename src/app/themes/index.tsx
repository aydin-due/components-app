import { useThemeChangerContext } from '@/presentation/context/ThemeChangerContext';
import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';

const ThemesScreen = () => {
  const { toggleTheme, currentTheme, isSystemTheme, setSystemTheme } = useThemeChangerContext();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === 'dark',
    systemMode: isSystemTheme
  })

  const setDarkMode = (val: boolean) => {
    // setColorScheme(val ? 'dark' : 'light')
    toggleTheme()
    setDarkModeSettings({
      darkMode: val,
      systemMode: false
    })

  }
  const setSystemMode = (val: boolean) => {
    if (val) {
      setSystemTheme()
    }

    setDarkModeSettings({
      darkMode: darkModeSettings.darkMode,
      systemMode: val
    })

  }

  return (
    <ThemedView margin>
      <ThemedCard className='mt-5'>
        <ThemedSwitch
          text='dark mode'
          className='mb-5'
          value={darkModeSettings.darkMode}
          onValueChange={setDarkMode}
        />
        <ThemedSwitch
          text='system mode'
          className='mb-5'
          value={darkModeSettings.systemMode}
          onValueChange={setSystemMode}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
