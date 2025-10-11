import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@react-native-vector-icons/ionicons";
import ROUTES from "../routes/Routes";

import SubscriptionScreen from "../../screens/SubscriptionScreen";
import MenuScreen from "../../screens/MenuScreen";
import HomeScreen from "../../screens/HomeScreen";

export type BottomTabParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.SUBSCRIPTION]: undefined;
  [ROUTES.MENU]: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

type TabBarIconProps = {
  focused: boolean;
  size: number;
  routeName: keyof BottomTabParamList;
};

const getTabBarIcon = ({ focused, size, routeName }: TabBarIconProps) => {
  let iconName: React.ComponentProps<typeof Ionicons>["name"] = "home-outline";

  if (routeName === ROUTES.HOME) {
    iconName = focused ? "home" : "home-outline";
  } else if (routeName === ROUTES.SUBSCRIPTION) {
    iconName = focused ? "card" : "card-outline";
  } else if (routeName === ROUTES.MENU) {
    iconName = focused ? "menu" : "menu-outline";
  }

  return <Ionicons name={iconName} size={size} color={focused ? "#108e38" : "gray"} />;
};

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          textDecorationLine: "none",
        },
        tabBarIcon: ({ focused, size }) =>
          getTabBarIcon({ focused, size, routeName: route.name as keyof BottomTabParamList }),
        tabBarActiveTintColor: "#108e38",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Tab.Screen name={ROUTES.SUBSCRIPTION} component={SubscriptionScreen} />
      <Tab.Screen name={ROUTES.MENU} component={MenuScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
