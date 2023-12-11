import RegisterAndLoginForm from "./RegisterAndLoginForm.jsx";
import {useContext} from "react";
import {UserContext} from "./UserContext.jsx";
// import Chat from "./Chat";

export default function Routes() {
  const {username} = useContext(UserContext);

  if (username) {
    return <div >Logged In</div>;
  }

  return (
    <RegisterAndLoginForm />
  );
}