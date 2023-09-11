import { StatusBar } from 'expo-status-bar';
import {useFonts, NunitoSans_400Regular, NunitoSans_700Bold} from '@expo-google-fonts/nunito-sans'
import { Loading } from '@components/Loading';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/themes';
import { Routes } from '@routes/index';

export default function App() {

  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Routes /> :<Loading />}
      <StatusBar style="dark" translucent backgroundColor='transparent' />
    </ThemeProvider>
  );
}


