import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

// благодаря данному методу мы получаем данные из backend(db.json),асинхронным способом
// выполняем get-запрос, дожидаемся и сохраняем в redux
export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });
  axios
    .get(
      `http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${
        sortBy.type
      }&_order=${sortBy.order}`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};
//метод для сохранения пицц
export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
