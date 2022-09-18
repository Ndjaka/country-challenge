import Header from "./components/Header/Header.jsx";
import Input from "./components/Input/Input.jsx";
import Select from "./components/Select/Select.jsx";
import List from "./components/Countries/List/List.jsx";


function App() {

  return (
    <div>
        <Header/>
        <div className={'main'}>
            <Input/>
            <Select/>
            <List/>
        </div>
     </div>
  )
}

export default App
