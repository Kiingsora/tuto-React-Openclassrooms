function Cart() {
  const monstera = 8;
  const lierre = 10;
  const fleurs = 15;

  return (
    <div>
        <h2>Panier : </h2>
      <ul>
        <li>Monstera : {monstera}€ </li>
        <li>Lierre : {lierre}€</li>
        <li>Bouquet de fleur : {fleurs}€</li>
      </ul>
      <p> Total : {monstera + lierre + fleurs}€</p>
    </div>
  );
}
export default Cart;
