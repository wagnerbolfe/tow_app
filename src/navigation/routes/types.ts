import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import ROUTES from "./ROUTES";

export type RootStackParamList = {
  [ROUTES.ROOT]: undefined;
  [ROUTES.LOGIN]: undefined;
  [ROUTES.SIGN_UP]: undefined;
  [ROUTES.MAIN_TABS]: undefined;
  [ROUTES.HOME]: undefined;
  [ROUTES.SUBSCRIPTION]: undefined;
  [ROUTES.MENU]: undefined;
  [ROUTES.SEARCH]: undefined;
  [ROUTES.OTP]: undefined;
  [ROUTES.PHONE_NUMBER]:undefined;
  [ROUTES.RIDE_CONFIRMATION]:undefined;
  [ROUTES.CHOOSE_LOGIN_SIGNUP]:undefined;
  [ROUTES.BOOK_CONFIRMATION]:undefined;
  [ROUTES.SPLASH]:undefined;
  [ROUTES.UPDATE_PROFILE]:undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
