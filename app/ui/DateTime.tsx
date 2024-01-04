'use client';

import { useState } from 'react';

const DateTime = () => {
  const [dtstr, setDtstr] = useState('');
  const dt = new Date().toString();
  return (
    <div>
      DateTime: {dtstr}
      <br />
      <button
        className='btn'
        onClick={() => {
          setDtstr(dt);
          console.log(new Date().toString());
        }}
      >
        DT
      </button>
    </div>
  );
};

export default DateTime;
