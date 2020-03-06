import React from "react";
import { Platform }                 from "react-native"
import { createAppContainer }       from "react-navigation";
import { createStackNavigator }     from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs"
import { Ionicons }                 from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"

import CategoriesScreen    from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealScreen";
import MealDetailScreen    from "../screens/MealDetailScreen";
import FavoriteScreen      from "../screens/FavoritesScreen"
import Colors              from "../constants/Colors";

// favorites and filters are alternatives to the stack of navigation
const MealsNavigator = createStackNavigator(
	{
		Categories: {
			screen: CategoriesScreen
		},
		CategoryMeals: {
			screen: CategoryMealsScreen
		},
		MealDetail: {
			screen: MealDetailScreen
		}
	},
	{
		// initialRouteName: "Categories" ,
		defaultNavigationOptions: {
			// put here to avoid repeat on each route (route options overwrites this)
			headerStyle: {
				backgroundColor:
					Platform.OS === "android" ? Colors.primaryColor : ""
			},
			headerTintColor:
				Platform.OS === "android" ? "white" : Colors.primaryColor,
			headerTitleStyle: { width: 300 }
		}
	}
);

const tabScreenConfig = {
	Meals: {
		screen: MealsNavigator,
		navigationOptions: {
			tabBarIcon: tabInfo => {
				return (
					<Ionicons
						name="ios-restaurant"
						size={25}
						color={tabInfo.tintColor}
					/>
				);
			},
			tabBarColor: Colors.primaryColor
		}
	},
	Favorite: {
		screen: FavoriteScreen,
		navigationOptions: {
			tabBarIcon: tabInfo => {
				return (
					<Ionicons
						name="ios-star"
						size={25}
						color={tabInfo.tintColor}
					/>
				);
			},
			tabBarColor: Colors.accentColor
		}
	}
};

const MealsFavTabNavigator =
	Platform.OS === "android"
		? createMaterialBottomTabNavigator(tabScreenConfig, {
				activeColor: "white",
				shifting: true,
				barStyle: {
					backgroundColor: Colors.primaryColor
				}
		  })
		: createBottomTabNavigator(tabScreenConfig, {
				tabBarOptions: {
					activeTintColor: Colors.accentColor
				}
		  });

export default createAppContainer(MealsFavTabNavigator);
