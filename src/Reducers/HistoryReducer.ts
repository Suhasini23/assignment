import { FETCH_HISTORY } from "../Actions/ActionType";

interface IHistoryReducer {
  historyData: object
}
function getInitialState(): IHistoryReducer {
  return {
    historyData: {},
  };
}
export default function (state: any = getInitialState(), action: any) {
  switch (action.type) {
    case FETCH_HISTORY:
      return {
        ...state,
        historyData: action.payload
      };
  }

  return state;
}