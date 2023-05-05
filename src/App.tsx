import reactLogo from "./assets/react.svg"; //accessing assets folder
import viteLogo from "/vite.svg"; //accessing public folder
import "./App.css";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import Main from "./layout/Content";
import Wrapper from "./layout/Wrapper";
import Footer from "./layout/Footer";
import Example from "./Example";
import loadScript from "./layout/LoadScripts";

function App() {
  loadScript();
  return (
    <>
      <div className="page d-flex flex-row flex-column-fluid">
        <Sidebar />
        <Wrapper>
          <Header />
          <Main>
            {/* Need to put our components here */}
            <Example />
          </Main>
          <Footer />
        </Wrapper>
      </div>
    </>
  );
}

export default App;
