import { allRoutes } from '@/constants/Routes';
import { useTheme } from '@/hooks/use-theme';
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '../global.css';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const bgColor = useTheme().background;
  const colorScheme = useColorScheme();
  return (
    <GestureHandlerRootView style={{ backgroundColor: bgColor, flex: 1 }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: bgColor,
            },
            headerStyle: {
              backgroundColor: bgColor,
            }
          }}
        >
          <Stack.Screen
            name='index'
            options={{ title: '' }}
          />

          {
            allRoutes.map(route => (
              <Stack.Screen
                key={route.name}
                name={route.name}
                options={{ title: route.title }}
              />
            ))
          }

        </Stack>
        {/* <ThemedView margin>
          <ThemedText type='h1' className='mt-20'>hola kjsahdsa</ThemedText>
        </ThemedView> */}
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
