import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './navigation';
import { Provider } from 'react-redux';
import { store } from './store/app.store';

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1}}>
        <SafeAreaView style={{ flex: 1}}>
          <NavigationContainer>
            <Navigation/>
          </NavigationContainer>
        </SafeAreaView>
      </GestureHandlerRootView>
    </Provider>
  );
}
