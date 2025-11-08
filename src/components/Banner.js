import logo from "../assets/logo.png";

function Banner() {
  const title = "Video game Land";
  return (
    <div  className="vgl-banner">
      <img src={logo} alt="logo du site" className="vgl-logo" />
      <h1> {title} </h1>
    </div>
  );
}

export default Banner;
