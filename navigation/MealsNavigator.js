import React from "react";
import { Platform }                 from "react-native";
import { createAppContainer }       from "react-navigation";
import { createStackNavigator }     from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons }                 from "@expo/vector-icons";
import { createDrawerNavigator }    from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import CategoriesScreen    from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealScreen";
import MealDetailScreen    from "../screens/MealDetailScreen";
import FavoriteScreen      from "../screens/FavoritesScreen";
import Colors              from "../constants/Colors";
import FiltersScreen       from "../screens/FiltersScreen";

const defaulStackNavOptions = {
	headerStyle: {
		backgroundColor:
			Platform.OS === "android" ? Colors.primaryColor : ""
	},
	headerTintColor:
		Platform.OS === "android" ? "white" : Colors.primaryColor,
	headerTitleStyle: { width: 300 },
	title: "A Screen"
}

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
		defaultNavigationOptions: defaulStackNavOptions
	}
);

const FavNavigator = createStackNavigator({
	Favorites: FavoriteScreen,
	MealDetail: MealDetailScreen
}, {
		defaultNavigationOptions: defaulStackNavOptions
})

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
		screen: FavNavigator,
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

// FiltersNavigator is just there to have a header
const FiltersNavigator = createStackNavigator({
	Filters: FiltersScreen
}, {
	// navigationOptions : {
	// 	drawerLabel: "Filters!!!!!"
	// },
	defaultNavigationOptions: defaulStackNavOptions
})

const MainNavigator = createDrawerNavigator({
	MealsFavs: {screen: MealsFavTabNavigator, navigationOptions: {
		drawerLabel: "Meals "
	}},
	Filters: FiltersNavigator
}, {
	contentOptions: {
		activeTintColor: Colors.accentColor,
		labelStyle: {
			fontFamily: "open-sans-bold"
		}
	}
})

export default createAppContainer(MainNavigator);
