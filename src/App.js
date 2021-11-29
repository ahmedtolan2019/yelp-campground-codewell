import { Presentation } from "./presentation/Index";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Presentation />
      </Router>
    </div>
  );
}

export default App;
