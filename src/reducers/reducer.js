const initialState = {
  message: '',
  messages: []
}

const CHAT_TYPING = "CHAT_TYPING";

function reducer( state = initialState, action){
  switch(action.type) {
    case CHAT_TYPING:
      let { message } = action
      return { ...state, message: action.payload}
}
}

  export function chatTyping(text) {
    return {
      type: CHAT_TYPING,
      payload: text
    }
  }

export default reducer;
