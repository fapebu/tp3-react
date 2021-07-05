import {createStore} from 'redux'; 

const estadoInicial = {
    numero: 0,
};

function reducer(state = estadoInicial,action){
    switch(action.type){
        case 'Sumar':
            return {
                numero:state.numero + 1,
            };
        case 'Restar':
            return {
                numero:state.numero - 1,
                };
        case 'Cero':
            return {
                numero: 0,
                    };
        
        default:
        return state;
    }
}


export default createStore(reducer);