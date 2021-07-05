import { useDispatch,useSelector } from "react-redux";
import Button from '@material-ui/core/Button';
export default function Counter(){
const contador = useSelector((state => state.numero));
const dispatch = useDispatch();
return(
        <div className="contenedor">
        <div className="title">
        <h1>Contador</h1>
        <h3 className="valor">{contador}</h3>
        </div>
        <div>
        <Button style={{margin: 20 + 'px'}} variant="contained" color="secondary" onClick={() => dispatch({ type: 'Sumar' })}>+</Button>
        <Button style={{margin: 10 + 'px'}} variant="contained" color="secondary" onClick={() => dispatch({ type: 'Restar' })}>-</Button>
        <Button style={{margin: 10 + 'px'}} variant="contained" color="secondary" onClick={() => dispatch({ type: 'Cero' })}>Volver a 0</Button>
        </div>
        </div>
        );
}