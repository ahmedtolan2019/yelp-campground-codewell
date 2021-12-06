import { Presentation } from "./presentation/Index";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./application/firebase/useAuth";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    return () => {
      setLoading(true);
    };
  }, [loading]);
  return (
    <div className="App">
      <AuthProvider>
        <Router>{loading ? "Loading..." : <Presentation />}</Router>
      </AuthProvider>
    </div>
  );
}

export default App;
