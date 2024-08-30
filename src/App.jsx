import {Header} from "./components/Header/Header.jsx";
import {Topic} from "./components/Topic/Topic.jsx";
import {Services} from "./components/Services/Services.jsx";
import {Specialists} from "./components/Specialists/Specialists.jsx";
import  "./App.css"

function App() {


  return (
      <div className={"container"}>
      <Header/>
      <Topic/>
      <Services/>
      <Specialists/>
      </div>
  )
}

export default App
