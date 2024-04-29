
import { Provider } from "react-redux";
import Body from"./component/Body";
import appstore from "./util/appstore";

function App() {
  return (
    <Provider store={appstore}>
    <Body/></Provider>
  );
}

export default App;
