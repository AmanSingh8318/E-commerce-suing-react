import React, { useState } from 'react';
import ALogin from './ALogin';
import Header from './Header';

function Data() {
  const [userData, setUserData] = useState(null);

  return (
    <div>
      <Header userData={userData} />
      <ALogin setUserData={setUserData} />
    </div>
  );
}

export default Data;