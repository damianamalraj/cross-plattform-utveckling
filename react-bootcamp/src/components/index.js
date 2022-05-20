import { useState } from "react";
import tralada from "../images/tralada.jpg";
import webDevoleper from "../images/web-devoleper.png";
import Tab1 from "../views/tab1";
import Tab2 from "../views/tab2";
import Tab3 from "../views/tab3";

export function ToggleSwitch() {
  let [isOn, setIsOn] = useState(true);
  return (
    <div>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>
    </div>
  );
}

export function Fruits() {
  let arr = ["Grape", "Apple", "Orange", "Bananna", "kiwi", "Mango"];
  return (
    <div>
      <ul>
        {arr.map((item) => (
          <li key={item}> {item}</li>
        ))}
      </ul>
    </div>
  );
}

export function ShröedingersFrontEndUtvecklare() {
  let [isTrue, setIsTrue] = useState(false);
  return (
    <div>
      {isTrue ? (
        <img style={{ width: "150px" }} src={webDevoleper} alt="" />
      ) : (
        <img style={{ width: "150px" }} src={tralada} alt="" />
      )}
      <button onClick={() => setIsTrue(!isTrue)}>Click me!!!</button>
    </div>
  );
}

export function TabularView() {
  // const tab1 = {
  //   backgrounColor: "red",
  //   height: "100vh",
  //   display: "block",
  // };
  // const tab2 = {
  //   backgrounColor: "green",
  //   height: "100vh",
  //   display: "none",
  // };
  // const tab3 = {
  //   backgrounColor: "blue",
  //   display: "none",
  //   height: "100vh",
  // };
  const [thing, setThing] = useState(1);
  return (
    <div>
      <button onClick={() => setThing(1)}>Tab 1</button>
      <button onClick={() => setThing(2)}>Tab 2</button>
      <button onClick={() => setThing(3)}>Tab 3</button>
      {thing === 1 ? <Tab1 /> : <Tab1 />}
      {thing === 2 ? <Tab2 /> : <Tab1 />}
      {thing === 3 ? <Tab3 /> : <Tab1 />}
    </div>
  );
}

export function FakedLoginForm() {
  const obj = {
    username: "daniel",
    password: "grillkorv",
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isTrue, setIsTrue] = useState(false);

  function logInHandler() {
    if (username === obj.username && password === obj.password) {
      setIsTrue(!isTrue);
    }
  }
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} action="/">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={logInHandler}>LogIn</button>
      </form>
      {isTrue ? <Tab1 /> : null}
    </div>
  );
}
