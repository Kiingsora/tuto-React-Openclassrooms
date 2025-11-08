const listeTest = ["jojo", "juju", "gigi"];

function Test() {
  return (
    <div>
      <ul>
        {listeTest.map((nom, index) => (
          <li key={`${nom} - ${index}`}> {nom} </li>
        ))}
      </ul>
    </div>
  );
}

export default Test
