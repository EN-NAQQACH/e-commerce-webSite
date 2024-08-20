
"use client"
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@/redux/cartStore';  // Adjust the path according to your project structure

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={"loading..."} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
export default Providers;
