import { View, StyleSheet } from 'react-native';
import { StoreContextProvider } from './src/context/storeContext';
import Route from './src/routes/Route';

export default function App() {
  
  return (
    <View style={[styles.container]} >
    <StoreContextProvider>
      <Route />
    </StoreContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

