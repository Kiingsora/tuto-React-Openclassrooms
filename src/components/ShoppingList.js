const listeDeJeu = ["Kingdom hearts", "Metal Gear Solid", "Dying Light"];

function ShoppingList() {
  return (
    <div className="vgl-ShoppingList">
      <h2>Panier : </h2>
      <ul>
        {listeDeJeu.map((jeu, index) => (
          <li key={`${jeu} - ${index}`}> {jeu} </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
