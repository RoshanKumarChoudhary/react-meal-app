import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Platform } from 'react-native'
import MealDetailsScreen from '../screen/MealDetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesMealScreen from '../screen/CategoriesMealScreen';
import CategoriesScreen from '../screen/CategoriesScreen';
import Colors from '../constant/Colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteScreen from '../screen/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FilterScreen from '../screen/FilterScreen';

const Stack = createNativeStackNavigator();

const MealStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName = "Categories" screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === "android" ? Colors.primaryColor : 'white'
            },
            headerTitleStyle: {
                fontFamily: 'open-sans-bold'
            },
            headerBackTitleStyle: {
                fontFamily: 'open-sans'
            },
            headerTintColor: Platform.OS === "android" ? 'white' : Colors.primaryColor
        }}>
            <Stack.Screen name="Categories" component={CategoriesScreen} options={{
                title: 'Meal Details'
            }
            } />
            <Stack.Screen name="MealDetail" component={MealDetailsScreen} />
            <Stack.Screen name="CategoryMeals" component={CategoriesMealScreen} />
        </Stack.Navigator>
    )
}

const FavoriteStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === "android" ? Colors.primaryColor : 'white'
            },
            headerTintColor: Platform.OS === "android" ? 'white' : Colors.primaryColor
        }}>
            <Stack.Screen name="FavoriteStack" component={FavoriteScreen} />
        </Stack.Navigator>
    )
}



const Tab = createBottomTabNavigator();
const MealTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'MealNavigator') {
                    iconName = focused
                        ? 'ios-restaurant'
                        : 'ios-restaurant-outline';
                } else if (route.name === 'Favorite') {
                    iconName = focused ? 'ios-star' : 'ios-star-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: Colors.accentColor,
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: {
                fontFamily: 'open-sans-bold'
            }
        })}>
            <Tab.Screen name="MealNavigator" component={MealStackNavigator} options={{ headerShown: false, tabBarLabel: 'Meals' }} />
            <Tab.Screen name="Favorite" component={FavoriteStackNavigator} options={{ headerShown: false, tabBarLabel: 'Favorites!' }} />
        </Tab.Navigator>
    )
}

const FilterStackNavigator = () => {
    return (
        <Stack.Navigator  screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === "android" ? Colors.primaryColor : 'white'
            },
            headerTintColor: Platform.OS === "android" ? 'white' : Colors.primaryColor
        }}>
            <Stack.Screen name="FilterStack" component={FilterScreen}  options={
                {
                    title: 'Filters'
                }
            }/>
        </Stack.Navigator>
    )
}

const Drawer = createDrawerNavigator();
export const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{headerShown: false, drawerActiveTintColor: Colors.accentColor}}>
                <Drawer.Screen name="TabNavigator" component={MealTabNavigator} options={
                    {
                        title: "Meals Listed"
                    }
                } />
                <Drawer.Screen name="Filter" component={FilterStackNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}