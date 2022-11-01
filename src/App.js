import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { NavBar } from "./components/NavBar";

function App({ signOut, user }) {
  return (
    <div className="App">
      <NavBar />
      {user.attributes.email}
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default withAuthenticator(App, { socialProviders: ["google"] });
