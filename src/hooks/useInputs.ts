import { useReducer } from 'react';

type useInputsAction = {
  name: string;
  value: string;
};

type useInputsState = {
  [key: string]: string;
};

function reducer(state: useInputsState, action: useInputsAction) {
  return {
    ...state,
    [action.name]: action.value
  };
}

export default function useInputs(initialForm: useInputsState) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };
  return [state, onChange];
}
