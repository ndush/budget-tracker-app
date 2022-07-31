
export default (state, action) => {
  switch(action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactionList: state.transactionList.filter(transaction => transaction.id !== action.payload)
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactionList: [action.payload, ...state.transactionList]
      }
    default:
      return state;
  }
}