import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import { LogBox, View } from 'react-native';
import { AuthProvider } from './src/components/AuthContext';
import AppNav from './src/components/AppNav';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    'RobotoBold': require('./src/assets/fonts/Roboto-Bold.ttf'),
    'RobotoBoldItalic': require('./src/assets/fonts/Roboto-BoldItalic.ttf'),
    'Roboto': require('./src/assets/fonts/Roboto-Regular.ttf')
  });

  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!appIsReady || !fontsLoaded)
    return null;

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <AuthProvider>
          <AppNav />
        </AuthProvider>
      </NavigationContainer>
    </View>
  );
}

export default App;