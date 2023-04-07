import AppNavigator from './/navigation/AppNavigator'
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
    <AppNavigator />
    </PaperProvider >
  );
}
