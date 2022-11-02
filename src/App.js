import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Storage } from "aws-amplify";
import { NavBar } from "./components/NavBar";
import { useState } from "react";

function App({ signOut, user }) {
  const [fileData, setFileData] = useState();
  const [fileStatus, setFileStatus] = useState(false);

  const uploadFile = async () => {
    const result = await Storage.put(fileData.name, fileData, {
      contentType: fileData.type,
    });
    setFileStatus(true);
    console.log(21, result);
  };

  return (
    <div className="App">
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>

      <div>
        <input type="file" onChange={(e) => setFileData(e.target.files[0])} />
      </div>
      <div>
        <button onClick={uploadFile}>Upload file</button>
      </div>
      {fileStatus ? "File uploaded successfully" : ""}
    </div>
  );
}

export default withAuthenticator(App, { socialProviders: ["google"] });
