import React, { useReducer } from 'react';

type CounterUseReducerState = {
  value: number;
};
type setValue = { type: 'INCREASE' | 'DECREASE' };
type Action = setValue;
function reducer(
  state: CounterUseReducerState,
  action: Action
): CounterUseReducerState {
  switch (action.type) {
    case 'INCREASE':
      return { value: state.value + 1 };
    case 'DECREASE':
      return { value: state.value - 1 };
    default:
      throw new Error('????');
  }
}

function CounterUseReducer() {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b> 입니다.
      </p>
      <button type="button" onClick={() => dispatch({ type: 'INCREASE' })}>
        +1
      </button>
      <button type="button" onClick={() => dispatch({ type: 'DECREASE' })}>
        -1
      </button>
    </div>
  );
}

export default CounterUseReducer;
