import React, {useState, useEffect} from 'react';
import Loading from '../../../components/Loading';
import InjectionRegisterP from './InjectionRegisterP';

export default (props) => {
  const [state, setState] = useState(0);
  const [loading, setLoading] = useState(false);

  const getDefects = async () => {
    setLoading(true);
    // const {data} = await askdjfka();
    setLoading(false);
  };

  useEffect(() => {
    getDefects();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <InjectionRegisterP {...props} state={state} setState={setState} />
  );
};
