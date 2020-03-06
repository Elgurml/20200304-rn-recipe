import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTiles from "../components/CategoryGridTiles";
import HeaderButton from "../components/HeaderButton";

const CategoriesScreen = props => {
	const renderGridItem = itemData => {
		return (
			<CategoryGridTiles
				title={itemData.item.title}
				color={itemData.item.color}
				onSelect={() => {
					props.navigation.navigate({
						routeName: "CategoryMeals",
						params: {
							categoryId: itemData.item.id
						}
					});
				}}
			/>
		);
	};

	return (
		// grid styling, keyExtractor is only for older versions of ReactNat
		<FlatList
			keyExtractor={(item, index) => item.id}
			data={CATEGORIES}
			renderItem={renderGridItem}
			numColumns={2}
		/>
	);
};

// for navigationOptions if we use the function form " = (navData) => { return {} " instead of " ={ " then we can have acces to navigation
// we need toggleDrawer to enable open/close on drawer 
CategoriesScreen.navigationOptions = navData => {
	return {
		title: "Meal Categories",
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

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
});

export default CategoriesScreen;
