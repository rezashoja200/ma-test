import { ADD_ITEM, REMOVE_ITEM } from "./action-types";
import { uuid } from "uuidv4";

const INITIAL_STATE = {
  formBuilder: [
    {
      type: 1,
      id: uuid(),
    },
    {
      type: 2,
      id: uuid(),
    },
    {
      type: 3,
      id: uuid(),
    },
    {
      type: 4,
      id: uuid(),
    },
  ],
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        formBuilder: [...state.formBuilder, { type: payload, id: uuid() }],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        formBuilder: state.formBuilder.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
};

export default reducer;
