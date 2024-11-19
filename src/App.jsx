import './App.css'
import Button from "./components/Button.jsx";

function App() {
const collection = () => console.log("To the collection");
const allBags = () => console.log("Shop all bags");
const preOrder = () => console.log("Pre-orders");

  return (
      <>
      <h1>Handbags & Purses</h1>
      <nav>
          {/*Opdracht 2 buttons*/}
        <Button type="button" onClick={collection} buttonText="to the collection" isDisabled={false}/>
        <Button type="button" onClick={allBags} buttonText="Shop all bags" isDisabled={false}/>
        <Button type="button" onClick={preOrder} buttonText="Pre-orders" isDisabled={true}/>

        {/*  Opdracht 1 buttons
        <button type="button" onClick={collection}>to the collection</button>
        <button type="button" onClick={allBags}>Shop all bags</button>
        <button type="button" disabled onClick={preOrder} >Pre-orders</button>*/}
      </nav>
      </>
  )
}

export default App
