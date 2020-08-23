import {
  ADD_ITEM,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_ITEM,
  DELETE_ITEM,
  CLEAR_ITEMS,
  TOGGLE_BOUGHT,
  CLEAR_BOUGHT,
} from './shoppingListAction';

export default (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case SET_CURRENT:
      return {
        ...state,
        current: state.items.filter((item) => item.id === action.payload)[0],
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === state.current.id
            ? { ...action.payload, id: item.id }
            : item
        ),
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case CLEAR_ITEMS:
      return {
        ...state,
        items: [],
      };
    case TOGGLE_BOUGHT:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, bought: !item.bought } : item
        ),
      };
    case CLEAR_BOUGHT:
      return {
        ...state,
        items: state.items.filter((item) => !item.bought),
      };
    default:
      return state;
  }
};
