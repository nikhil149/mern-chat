import "./App.css";
import axios from "axios";
import RegisterAndLoginForm from "./RegisterAndLoginForm";

function App() {
  axios.defaults.baseURL = "http://localhost:4000";
  return <RegisterAndLoginForm />;
}

export default App;
