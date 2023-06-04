import reactLogo from './assets/react.svg'
import './App.css'
import Cards from "./components/Cards";
import Card from "./components/Card";

function App() {
return (
    <>
        <Cards>
            <Card
                title="Card title"
                image={reactLogo}
                link="#"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."/>

            <Card
                title="Card title"
                link="#"
                description="Some quick example text to build on the card title and make up the bulk of the card's content." />

            <Card
                title="Special title treatment"
                link="#"
                description="With supporting text below as a natural lead-in to additional content." />
        </Cards>
    </>
  )
}

export default App
