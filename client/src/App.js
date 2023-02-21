import "./App.css";
import Title from "./components/layout/Title";
import "antd/dist/reset.css";
import AddContact from "./components/forms/AddContact";

const App = () => {
  return (
    <div className="App">
      <Title />
      <AddContact />
    </div>
  );
};

export default App;
