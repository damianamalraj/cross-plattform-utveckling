import "./App.css";
import * as Components from "./components/index";

export default function App() {
  return (
    <div className="App">
      <Components.ToggleSwitch />
      <Components.Fruits />
      <Components.ShröedingersFrontEndUtvecklare />
      <Components.TabularView />
      <Components.FakedLoginForm />
    </div>
  );
}
