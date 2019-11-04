import React, { useState } from 'react';

function Counter() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>
      </p>
      <button type="button" onClick={() => setValue(value + 1)}>
        +1
      </button>
      <button type="button" onClick={() => setValue(value - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;
