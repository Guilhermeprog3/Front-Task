import { RouterManager } from './routes/routesManager';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <AuthProvider>
        <RouterManager />
    </AuthProvider>

  );
}

export default App;