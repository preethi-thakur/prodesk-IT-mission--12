import SidebarFilters from './SidebarFilters'
import { Provider } from 'react-redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    searchQuery: '',
    selectedGenre: '',
    selectedYear: '',
    selectedType: '',
    sortBy: 'title',
    sortOrder: 'asc'
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
    setGenre: (state, action) => {
      state.selectedGenre = action.payload
    },
    setYear: (state, action) => {
      state.selectedYear = action.payload
    },
    setType: (state, action) => {
      state.selectedType = action.payload
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload
    },
    clearFilters: (state) => {
      state.searchQuery = ''
      state.selectedGenre = ''
      state.selectedYear = ''
      state.selectedType = ''
      state.sortBy = 'title'
      state.sortOrder = 'asc'
    }
  }
})

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer
  }
})

const ReduxWrapper = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)

export default {
  title: 'Components/SidebarFilters',
  component: SidebarFilters,
  decorators: [(Story) => <ReduxWrapper><Story /></ReduxWrapper>],
  tags: ['autodocs']
}

export const Default = {}

export const WithPreSelectedFilters = {
  decorators: [
    (Story) => {
      const customStore = configureStore({
        reducer: {
          filters: createSlice({
            name: 'filters',
            initialState: {
              searchQuery: 'Action',
              selectedGenre: 'Action',
              selectedYear: '2020',
              selectedType: 'Movie',
              sortBy: 'year',
              sortOrder: 'desc'
            },
            reducers: filterSlice.reducer
          }).reducer
        }
      })
      return <Provider store={customStore}><Story /></Provider>
    }
  ]
}

export const WithSearchOnly = {
  decorators: [
    (Story) => {
      const customStore = configureStore({
        reducer: {
          filters: createSlice({
            name: 'filters',
            initialState: {
              searchQuery: 'Comedy',
              selectedGenre: '',
              selectedYear: '',
              selectedType: '',
              sortBy: 'title',
              sortOrder: 'asc'
            },
            reducers: filterSlice.reducer
          }).reducer
        }
      })
      return <Provider store={customStore}><Story /></Provider>
    }
  ]
}

export const WithGenreOnly = {
  decorators: [
    (Story) => {
      const customStore = configureStore({
        reducer: {
          filters: createSlice({
            name: 'filters',
            initialState: {
              searchQuery: '',
              selectedGenre: 'Sci-Fi',
              selectedYear: '',
              selectedType: '',
              sortBy: 'title',
              sortOrder: 'asc'
            },
            reducers: filterSlice.reducer
          }).reducer
        }
      })
      return <Provider store={customStore}><Story /></Provider>
    }
  ]
}
