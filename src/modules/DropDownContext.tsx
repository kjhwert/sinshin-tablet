import React, {createContext, ReactNode, useContext, useRef} from 'react';
import DropdownAlert from 'react-native-dropdownalert';

const DropDownContext = createContext({});

interface IProps {
  children: ReactNode;
}

export const DropDownContextProvider = ({children}: IProps) => {
  let ref = useRef();
  return (
    <DropDownContext.Provider value={{ref}}>
      {children}
      <DropdownAlert ref={ref} closeInterval={500} />
    </DropDownContext.Provider>
  );
};

export const useDropDown = () => useContext(DropDownContext);
