import Card from "./Card";
import Grid from "./Grid";
import cards from "./bookdata";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Grid>
        {cards.map((card) => (
          <Card title={card.title} text={card.text} image={card.image} />
        ))}
      </Grid>
    </>
  );
}

export default App;
