import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  WelcomeScreen: undefined,
  HomeScreen: undefined,
}

export type ScreenNavigationProp<
  RouteName extends keyof RootStackParamList,
  ParamList extends RootStackParamList = RootStackParamList
> = StackNavigationProp<ParamList, RouteName>;