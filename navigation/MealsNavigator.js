import { createAppContainer } from "react-navigation"
import {
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen"

// favorites and filters are alternatives to the stack of navigation
const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: { 
    screen: CategoryMealsScreen 
  },
  MealDetail: MealDetailScreen
});

export default createAppContainer(MealsNavigator)