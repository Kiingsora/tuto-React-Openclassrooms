function Cart() {
  const kingdomHearts = 25;
  const metalGearSolid = 15;
  const diyingLight = 32;

  return (
    <div className="vgl-cart">
        <h2>Panier : </h2>
      <ul>
        <li>Kingdom hearts : {kingdomHearts}€ </li>
        <li>Metal Gear Solid : {metalGearSolid}€</li>
        <li>Dying Light : {diyingLight}€</li>
      </ul>
      <p> Total : {kingdomHearts + metalGearSolid + diyingLight}€</p>
    </div>
  );
}
export default Cart;
