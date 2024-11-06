import './index.css';
import Main from "./Main/Main.jsx";
import ContextProvider from "./context/Context.jsx";

function App() {
  return (
      <ContextProvider>
        <Main />
      </ContextProvider>
  );
}

export default App;
