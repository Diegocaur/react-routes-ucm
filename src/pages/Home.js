import imagen1 from "../assets/curso1.jpg";
import imagen2 from "../assets/curso2.jpg";
import imagen3 from "../assets/blog1.webp";
import portada from "../assets/banner.jpg";

function Home() {
  return (
    <>
      <div className="fondo"></div>
      <div className="contenedorHome">
        <div className="contenedorHome1">
          <h3>Años de experiencia </h3>
          <img src={imagen1} alt=""></img>
          <p>
            caurs adasdas dolor sit amet consectetur adipisicing elit. Esse,
            magnam. Odit aperiam voluptates repellat quae ipsum magnam. Odit
            aperiam voluptates repellat quae ipsum{" "}
          </p>
        </div>
        <div className="contenedorHome2">
          <h3>Calidad Garantizada </h3>
          <img src={imagen2} alt=""></img>
          <p>
            caurs adasdas dolor sit amet consectetur adipisicing elit. Esse,
            magnam. Odit aperiam voluptates repellat quae ipsum magnam. Odit
            aperiam voluptates repellat quae ipsum{" "}
          </p>
        </div>
        <div className="contenedorHome3">
          <h3>Los Mejores granos </h3>
          <img src={imagen3} alt=""></img>
          <p>
            caurs adasdas dolor sit amet consectetur adipisicing elit. Esse,
            magnam. Odit aperiam voluptates repellat quae ipsum magnam. Odit
            aperiam voluptates repellat quae ipsum{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export { Home };
