import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealScreen = props => {
	const renderMealItem = itemData => {
		return (
			<MealItem
				title={itemData.item.title}
				image={itemData.item.imageUrl}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				onSelectMeal={() => {
					props.navigation.navigate({routeName: "MealDetail", params: {mealId: itemData.item.id}})
				}}
			/>
		);
	};

	const catId = props.navigation.getParam("categoryId");

	const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

	const displayedMeals = MEALS.filter(
		meal => meal.categoryIds.indexOf(catId) >= 0
	);

	return (
		<View style={styles.screen}>
			<FlatList
				style={{ width: "100%" }}
				keyExtractor={(item, index) => item.id}
				data={displayedMeals}
				renderItem={renderMealItem}
			/>
		</View>
	);
};

CategoryMealScreen.navigationOptions = navigationData => {
	const catId = navigationData.navigation.getParam("categoryId");

	const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

	return {
		title: selectedCategory.title
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
});

export default CategoryMealScreen;
