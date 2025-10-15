import {StyleSheet} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, NavigationState } from "@react-navigation/native";
import ROUTES from "../routes/Routes";
import BottomTabNavigator from "./BottomTabNav";
import AuthStackNav from "./AuthStackNav";
import { navigationRef, parseAndLogRoute, setIsNavigationReady } from "../Navigation";
import Logger from "../../utils/Logger";
import { useEffect } from "react";

const AppContainer = () => {
  const Stack = createNativeStackNavigator();
  const isAuthenticated = true;

  const handleStateChange = (state: NavigationState | undefined) => {
    Logger.info("Navigation state changed", {state, isAuthenticated});
    parseAndLogRoute(state);
  };

  useEffect(() => {
    if(navigationRef.current?.isReady()) {
      Logger.info("Navigation is ready");
    }
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={handleStateChange}
      onReady={setIsNavigationReady}
    >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAuthenticated ? (
          <Stack.Screen name={ROUTES.MAIN_TABS} component={BottomTabNavigator} />
        ) : (
          <Stack.Screen name={ROUTES.ROOT} component={AuthStackNav} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const RootNav = () => {
  return <AppContainer />;
};

export default RootNav;

const styles = StyleSheet.create({});
