import React from "react";
import './App.css';
import Header from "./components/Header/header";
import Whatsapp from "./components/Whatsapp/whatsapp"
import Body_1 from "./components/Body/Body_1/body_1"
import Body_2 from "./components/Body/Body_2/body_2"
import How_to_use from "./components/How_to_use/how_to_use"
import Plan_Schedule from "./components/plan_schedule/plan_schedule"
import Pricing from "./components/Pricing/pricing"
import Pricing_2 from "./components/Pricing_2/pricing_2"

function App() {
  return (
    <div className="App">
      <Header/>
      <Body_1/>
      <Body_2/>
      <How_to_use/>
      <Plan_Schedule/>
      <Pricing/>
      <Pricing_2/>
      <Plan_Schedule/>
      <Whatsapp/>
    </div>
  );
}

export default App;
