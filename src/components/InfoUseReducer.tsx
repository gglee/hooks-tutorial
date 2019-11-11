import React, { useReducer } from 'react';

type InfoUseReducerState = {
  name: string;
  nickName: string;
};
type useInputsAction = {
  name: string;
  value: string;
};
function reducer(state: InfoUseReducerState, action: useInputsAction) {
  return {
    ...state,
    [action.name]: action.value
  };
}
function InfoUseReducer() {
  const [state, dispatch] = useReducer(reducer, { name: '', nickName: '' });
  const { name, nickName } = state;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickName" value={nickName} onChange={onChange} />
      </div>
      <div>
        <b>이름:</b> {name}
      </div>
      <div>
        <b>닉네임:</b> {nickName}
      </div>
    </div>
  );
}

export default InfoUseReducer;
