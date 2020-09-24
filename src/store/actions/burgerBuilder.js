import * as actionTypes from './actionTypes';
import axios from '../../axios-order';

export const addIngredient = igName => {
	return {
		type: actionTypes.ADD_INGREDIENT,
		ingredientName: igName,
	};
};

export const removeIngredient = igName => {
	return {
		type: actionTypes.REMOVE_INGREDIENT,
		ingredientName: igName,
	};
};

export const setIngredient = ingredients => {
	return {
		type: actionTypes.SET_INGREDIENTS,
		ingredients: ingredients,
	};
};

export const fetchIngredientsFailed = () => {
	return {
		type: actionTypes.FETCH_INGREDIENTS_FAILED,
	};
};

export const initIngredients = () => {
	return dispatch => {
		axios
			.get('https://reactburger-e4f44.firebaseio.com/ingredients.json')
			.then(response => {
				dispatch(setIngredient(response.data));
				// console.log(response.data);
			})
			.catch(error => {
				dispatch(fetchIngredientsFailed());
			});
	};
};
