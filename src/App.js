import "./App.css";
import Form from "./User/components/form/Form";
import ListItem from "./User/components/item/ListItem";
import store from "./store/index";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Form />
        <ListItem />
      </div>
    </Provider>
  );
}

export default App;
