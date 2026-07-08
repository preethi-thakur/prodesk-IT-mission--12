import ActiveFilters from "./ActiveFilters";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "@/store/slices/filterSlice";

const createMockStore = (initialState) =>
  configureStore({
    reducer: {
      filters: filterReducer,
    },
    preloadedState: {
      filters: initialState,
    },
  });

const ReduxDecorator = (initialState) => (Story) => {
  const store = createMockStore(initialState);

  return (
    <Provider store={store}>
      <Story />
    </Provider>
  );
};

export default {
  title: "Components/ActiveFilters",
  component: ActiveFilters,
  tags: ["autodocs"],
};

export const Empty = {
  decorators: [
    ReduxDecorator({
      searchQuery: "",
      selectedGenre: "",
      selectedYear: "",
      selectedType: "",
      sortBy: "title",
      sortOrder: "asc",
    }),
  ],
};

export const WithSearchFilter = {
  decorators: [
    ReduxDecorator({
      searchQuery: "Action",
      selectedGenre: "",
      selectedYear: "",
      selectedType: "",
      sortBy: "title",
      sortOrder: "asc",
    }),
  ],
};

export const WithGenreFilter = {
  decorators: [
    ReduxDecorator({
      searchQuery: "",
      selectedGenre: "Comedy",
      selectedYear: "",
      selectedType: "",
      sortBy: "title",
      sortOrder: "asc",
    }),
  ],
};

export const WithYearFilter = {
  decorators: [
    ReduxDecorator({
      searchQuery: "",
      selectedGenre: "",
      selectedYear: "2020",
      selectedType: "",
      sortBy: "title",
      sortOrder: "asc",
    }),
  ],
};

export const WithTypeFilter = {
  decorators: [
    ReduxDecorator({
      searchQuery: "",
      selectedGenre: "",
      selectedYear: "",
      selectedType: "Series",
      sortBy: "title",
      sortOrder: "asc",
    }),
  ],
};

export const WithMultipleFilters = {
  decorators: [
    ReduxDecorator({
      searchQuery: "Sci-Fi",
      selectedGenre: "Sci-Fi",
      selectedYear: "2019",
      selectedType: "Movie",
      sortBy: "title",
      sortOrder: "asc",
    }),
  ],
};

export const WithAllFilters = {
  decorators: [
    ReduxDecorator({
      searchQuery: "Action",
      selectedGenre: "Action",
      selectedYear: "2021",
      selectedType: "Movie",
      sortBy: "year",
      sortOrder: "desc",
    }),
  ],
};