import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ImageBackground
} from "react-native";

const MealItem = props => {
	return (
		<View style={styles.mealItem}>
			<TouchableOpacity onPress={props.onSelectMeal}>
				<View>
					<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
						<ImageBackground
							source={{ uri: props.image }}
							style={styles.bgImage}
						>
							<View style={styles.titleContainer}>
								<Text style={styles.title} numberOfLines={1}>
									{props.title}
								</Text>
							</View>
						</ImageBackground>
					</View>
					<View style={{ ...styles.mealRow, ...styles.mealDetail }}>
						<Text>{props.duration}</Text>
						<Text>{props.complexity.toUpperCase()}</Text>
						<Text>{props.affordability.toUpperCase()}</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default MealItem;

const styles = StyleSheet.create({
	mealRow: {
		flexDirection: "row"
	},
	mealItem: {
		height: 200,
		width: "100%",
        backgroundColor: "#dbdbdb",
        borderRadius: 10,
        overflow: "hidden",
	},
	bgImage: {
		width: "100%",
		height: "100%",
		justifyContent: "flex-end"
	},
	mealHeader: {
		height: "85%"
	},
	mealDetail: {
		paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems: "center",
        height: "15%"
	},
	titleContainer: {
		backgroundColor: "rgba(0,0,0,0.6)",
		paddingVertical: 5,
		paddingHorizontal: 12
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 22,
		color: "white",
		textAlign: "center"
	}
});