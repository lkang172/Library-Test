import Card from "./Card";
import Grid from "./Grid";
import cards from "./bookdata";
import Navbar from "./Navbar";
import InputTest from "./InputTest";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <InputTest prompt1="Class" prompt2="Assignment"></InputTest>
      <Grid>
        {cards.map((card) => (
          <Card title={card.title} text={card.text} image={card.image} />
        ))}
      </Grid>
    </>
  );
}

export default App;
