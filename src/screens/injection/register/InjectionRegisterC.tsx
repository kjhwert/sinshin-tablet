import React, {useState} from 'react';
import InjectionRegisterP from './InjectionRegisterP';

export default (props) => {
  const [state, setState] = useState(0);
  return <InjectionRegisterP {...props} state={state} setState={setState} />;
};
