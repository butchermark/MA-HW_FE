import { ContextProvider } from "./context/AuthContext";
import { ThemeProviderWrapper } from "./context/ThemeContext";
import { PageRouter } from "./router/PageRouter";

function App() {
  return (
    <div
      className="app"
      style={{ margin: 0, padding: 0, fontFamily: "Raleway" }}
    >
      <ThemeProviderWrapper>
        <ContextProvider>
          <PageRouter />
        </ContextProvider>
      </ThemeProviderWrapper>
    </div>
  );
}

export default App;
