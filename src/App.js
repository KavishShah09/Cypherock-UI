import './App.css';
import Nav from "./components/Nav";
import SideNav from "./components/SideNav";
import Main from "./components/Main";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <Nav />
      <SideNav />
      <Main />
      <Table />
    </div>
  );
}

export default App;
