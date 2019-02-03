import axios from "axios";
import { pubKey } from "../keys";

// constants(action types):

const GET_CHARS = "GET_CHARS",
  GET_SINGLE_CHAR = "GET_SINGLE_CHAR",
  GET_CHAR_COMICS = "GET_CHAR_COMICS";

// functions(action creators):

export function getChars(searchTerm) {
  return {
    type: GET_CHARS,
    payload: axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchTerm}&limit=100&apikey=${pubKey}`
    )
  };
}

export function getSingleChar(id) {
  return {
    type: GET_SINGLE_CHAR,
    payload: axios.get(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${pubKey}`
    )
  };
}

export function getCharComics(id) {
  return {
    type: GET_CHAR_COMICS,
    payload: axios.get(
      `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?apikey=${pubKey}`
    )
  };
}

// state(initialState):

const initialState = {
  characters: [],
  char: {},
  comics: [],
  loading: false
};

// reducer:

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_CHARS}_FULFILLED`:
      return {
        ...state,
        characters: action.payload.data.data.results
      };
    case `${GET_SINGLE_CHAR}_FULFILLED`:
      return {
        ...state,
        char: action.payload.data.data.results[0]
      };
    case `${GET_CHAR_COMICS}_FULFILLED`:
      return {
        ...state,
        comics: action.payload.data.data.results,
        loading: false
      };
    case `${GET_CHAR_COMICS}_PENDING`:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
