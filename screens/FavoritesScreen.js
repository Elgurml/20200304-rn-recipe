import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

const FavoritesScreen = props => {
	const favMeals = useSelector(state => state.meals.favoriteMeals);

	if (favMeals.length === 0 || !favMeals) {
		return (
			<View style={styles.content}>
				<DefaultText>
					No favorite meals found. Start adding some!
				</DefaultText>
			</View>
		);
	}

	return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = {
	title: "Your Favorites"
};

const styles = StyleSheet.create({
	content: {
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
