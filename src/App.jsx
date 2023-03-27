import Description from "./components/Description"
import Header from "./components/Header"
import ProductView from "./components/productView"
import { DivMain } from "./style"

function App() {
  
  return (
    <>
      <Header/>
      <DivMain>
        <Description/>
        <ProductView/>
      </DivMain>
    </>
  )
  
}

export default App
