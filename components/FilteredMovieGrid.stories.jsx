import FilteredMovieGrid from './FilteredMovieGrid'

export default {
  title: 'Components/FilteredMovieGrid',
  component: FilteredMovieGrid,
  tags: ['autodocs'],
  argTypes: {
    initialMovies: {
      control: 'object',
      description: 'Array of movie objects to display'
    },
    favorites: {
      control: 'object',
      description: 'Object mapping movie IDs to favorite status'
    },
    onToggleFavorite: {
      action: 'toggleFavorite',
      description: 'Callback function when favorite button is clicked'
    },
    hasMore: {
      control: 'boolean',
      description: 'Whether there are more movies to load'
    },
    isLoadingMore: {
      control: 'boolean',
      description: 'Whether more movies are currently loading'
    },
    onLoadMore: {
      action: 'loadMore',
      description: 'Callback function when more movies should be loaded'
    }
  }
}

const sampleMovies = [
  {
    imdbID: 'tt0111161',
    Title: 'The Shawshank Redemption',
    Year: '1994',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDM0LWEzZWQtY2UxYWVkNGY2ZjljXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
  },
  {
    imdbID: 'tt0068646',
    Title: 'The Godfather',
    Year: '1972',
    Poster: 'https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
  },
  {
    imdbID: 'tt0468569',
    Title: 'The Dark Knight',
    Year: '2008',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg'
  },
  {
    imdbID: 'tt0088763',
    Title: 'Back to the Future',
    Year: '1985',
    Poster: 'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtMjU1OC00YzQxLTgyYjEtZWY2MWEwYWUyYjY1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
  },
  {
    imdbID: 'tt0109830',
    Title: 'Forrest Gump',
    Year: '1994',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
  }
]

export const Default = {
  args: {
    initialMovies: sampleMovies,
    favorites: {},
    onToggleFavorite: () => {},
    hasMore: false,
    isLoadingMore: false,
    onLoadMore: () => {}
  }
}

export const WithFavorites = {
  args: {
    initialMovies: sampleMovies,
    favorites: {
      'tt0111161': true,
      'tt0068646': true
    },
    onToggleFavorite: () => {},
    hasMore: false,
    isLoadingMore: false,
    onLoadMore: () => {}
  }
}

export const WithMoreToLoad = {
  args: {
    initialMovies: sampleMovies,
    favorites: {},
    onToggleFavorite: () => {},
    hasMore: true,
    isLoadingMore: false,
    onLoadMore: () => {}
  }
}

export const LoadingMore = {
  args: {
    initialMovies: sampleMovies,
    favorites: {},
    onToggleFavorite: () => {},
    hasMore: true,
    isLoadingMore: true,
    onLoadMore: () => {}
  }
}

export const Empty = {
  args: {
    initialMovies: [],
    favorites: {},
    onToggleFavorite: () => {},
    hasMore: false,
    isLoadingMore: false,
    onLoadMore: () => {}
  }
}

export const SingleMovie = {
  args: {
    initialMovies: [sampleMovies[0]],
    favorites: {},
    onToggleFavorite: () => {},
    hasMore: false,
    isLoadingMore: false,
    onLoadMore: () => {}
  }
}
