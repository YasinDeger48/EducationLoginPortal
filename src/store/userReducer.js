
//action_creator

const USER_INIT = 'USER_INIT';

export function userInit(user = {}){

    //action
    return {
        type : USER_INIT,
        payload : user
    }
}

//reducer: bir önceki statei alıp yeni state e çevirir.

export default function userReducer (state={} ,action){

    switch(action.type){

        case USER_INIT:
            return Object.assign({}, action.payload);
       
        default:
            return state;
    }
}