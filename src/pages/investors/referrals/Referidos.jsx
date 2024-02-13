import { Investor } from '../../../components/Invesor';
import  "./reeferidos.css";
import LEYENDA from "./LEYENDA.png";
const Referidos = () => {
    return ( 

        <>
        <Investor>
            <center> 
        <h1 className='h1'>referidos</h1>
        </center>
        <div className="padre-1"> 
            <div className="contenedor-1">
                <h1 className='h1contenedor'>equipo total de personas </h1>
                <div className='contenedorhijo'><p>4</p></div>


            </div>
            <div className="contenedor-1"><h1 className="h1contenedor">Volumen grupal</h1>
            <div className="contenedorhijo"><p>400</p></div>
            </div>
            <div className="contenedor-1">
                <h1 className='h1contenedor'>volumen grupal</h1>
                <div className='contenedorhijo'><p>400</p></div>


            </div>
            <div className="contenedor-1 dos">
                <h1 className="h1contenedor">bono inicio</h1>
                <p>4</p>


            </div>
            <div className="contenedor-1 dos">
                <h1 className="h1contenedor">residual mensual</h1>
                <p>400</p>


            </div>
            <div className="contenedor-1 dos">
                <h1 className="h1contenedor">ganancia actual</h1>
                <p>400</p>


            </div>
        </div>

        
            
        

        <div className="contenedor-abajo">

        </div>
        <div className="above">
            <div className="abovehijo1">
                <h1 className='abovehijoh1'>leyenda</h1>
                <ul className='ul'>
                    <li>Lore sr  Quam commodi dolorem inventore quia, nulla itaque quis ipsa sunt temp.</li>
                    <li>Lore sr  Quam commodi dolorem inventore quia, nulla itaque quis ipsa sunt temp.</li>
                    <li>Lore sr  Quam commodi dolorem inventore quia, nulla itaque quis ipsa sunt temp.</li>
                    <li>Lore sr  Quam commodi dolorem inventore quia, nulla itaque quis ipsa sunt temp.</li>
                    <li>Lore sr  Quam commodi dolorem inventore quia, nulla itaque quis ipsa sunt temp.</li>
                    <li>Lore sr  Quam commodi dolorem inventore quia, nulla itaque quis ipsa sunt temp.</li>
                    <li>Lore sr  Quam commodi dolorem inventore quia, nulla itaque quis ipsa sunt temp.</li>
                    

                </ul>



            </div>
            <div className="abovehijo2">
                <img src={LEYENDA} alt=""  className='imagen'/>
            </div>
        </div>
        </Investor>
        
        </>
     );
}
 
export default Referidos;