import { allRoutes } from '@/constants/Routes';
import { useTheme } from '@/hooks/use-theme';
import { ThemeChangerProvider } from '@/presentation/context/ThemeChangerContext';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '../global.css';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const bgColor = useTheme().background;

  return (
    <GestureHandlerRootView style={{ backgroundColor: bgColor, flex: 1 }}>
      <ThemeChangerProvider>
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
                options={{ title: route.title, headerShown: !route.title.includes('Slides') }}
              />
            ))
          }

        </Stack>
        {/* <ThemedView margin>
          <ThemedText type='h1' className='mt-20'>hola kjsahdsa</ThemedText>
        </ThemedView> */}
      </ThemeChangerProvider>
    </GestureHandlerRootView>
  );
}
