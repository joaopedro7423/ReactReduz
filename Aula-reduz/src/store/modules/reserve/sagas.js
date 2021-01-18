import {select, all, call, put, takeLatest} from 'redux-saga/effects';
import api from '../../../services/api';
import { addReserveSuccess, updateAmountRequest, updateAmountSuccess } from "./actions";

function* addToReserve({id}){

    const tripExists = yield select(
        state => state.reserve.find(trip =>trip.id ===id)
    );

    //puxa tudo nessa phorra de servidor como se fosse um Array de info.
    const myStok = yield call(api.get, `/stock/${id}`);

    //separa a info que deseja em uma variavel
    const stockAmount = myStok.data.amount;


    const currentStock = tripExists ? tripExists.amount : 0;

    const amount = currentStock + 1;

    if(amount > stockAmount){
        alert('Quantidade maxima de estoque atingida.');
        return;
    }


    if(tripExists){
        //aumenta o amount..
        yield put(updateAmountRequest(id,amount)); 


    }else{
        const response = yield call(api.get, `trips/${id}` );

        const data ={
            ...response.data,
            amount:1,

        };

        yield put(addReserveSuccess(data));
    }



}

function* updateAmount({id, amount}){
    if(amount <=0 ) return;

    const myStok = yield call(api.get, `/stock/${id}`);

    const stockAmount = myStok.data.amount;

    if(amount > stockAmount){
        alert('Quantidade maxima atingida.');
        return;
    }
    yield put(updateAmountSuccess(id, amount));

}


export default all([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve),
    takeLatest('UPDATE_RESERVE_REQUEST', updateAmount),
]);


