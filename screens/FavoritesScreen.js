import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data"
import HeaderButton from "../components/HeaderButton";


const FavoritesScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2" )
	return <MealList listData={favMeals} navigation={props.navigation}/>
};

FavoritesScreen.navigationOptions = {
    title: "Your Favorites"
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
});

// for navigationOptions if we use the function form " = (navData) => { return {} " instead of " ={ " then we can have acces to navigation
// we need toggleDrawer to enable open/close on drawer 
FavoritesScreen.navigationOptions = navData => {
	return {
		title: "Your Favorites",
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Menu"
					iconName="ios-menu"
					onPress={() => {
						navData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		)
	};
};

export default FavoritesScreen;