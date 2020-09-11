import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  login: undefined;
  main: undefined;
  injection: undefined;
  injectionRegister: undefined;
};

type MainScreenRouteProp = RouteProp<RootStackParamList, 'main'>;

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'main'>;

export type IRoute = MainScreenRouteProp;
export type INavigation = MainScreenNavigationProp;
