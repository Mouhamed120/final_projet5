import "./Settings.css";
import { useContext, useState } from "react";
import { Context } from "../context/Contex";
import axios from "axios";
const Settings = () => {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const res = await axios.put(
        "http://localhost:5000/api/users/" + user._id,
        updatedUser
      );
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <div className="settings">
      <div className="settingWrapper">
        <div className="settingsTilte">
          <span className="settingsUpdateTitle">Update your Account</span>
          <span className="settingsDeleteTitle">Delete your Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsProfilePic">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "http://localhost:5000/images/" + user.profilePic
              }
              alt=""
            />
            <label htmlFor="fileInput" className="">
              <i className="settingPIcon fas fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label htmlFor="">User Name</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder={user.password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button className="settingsSubmit">Update</button>
        </form>
        {success && (
          <span
            style={{
              color: "green",
              textAlign: "center",
              margin: "20px",
              display: "block",
            }}
          >
            Profile has been success
          </span>
        )}
      </div>
    </div>
  );
};

export default Settings;
