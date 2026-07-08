import MovieGallery from './MovieGallery'

export default {
  title: 'Components/MovieGallery',
  component: MovieGallery,
  tags: ['autodocs'],
  argTypes: {
    movies: {
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
  },
  {
    imdbID: 'tt0133093',
    Title: 'The Matrix',
    Year: '1999',
    Poster: 'https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
  }
]

export const Default = {
  args: {
    movies: sampleMovies,
    favorites: {},
    onToggleFavorite: () => {}
  }
}

export const WithFavorites = {
  args: {
    movies: sampleMovies,
    favorites: {
      'tt0111161': true,
      'tt0068646': true,
      'tt0468569': true
    },
    onToggleFavorite: () => {}
  }
}

export const Empty = {
  args: {
    movies: [],
    favorites: {},
    onToggleFavorite: () => {}
  }
}

export const SingleMovie = {
  args: {
    movies: [sampleMovies[0]],
    favorites: {},
    onToggleFavorite: () => {}
  }
}

export const TwoMovies = {
  args: {
    movies: sampleMovies.slice(0, 2),
    favorites: {},
    onToggleFavorite: () => {}
  }
}

export const LargeGrid = {
  args: {
    movies: [...sampleMovies, ...sampleMovies, ...sampleMovies],
    favorites: {},
    onToggleFavorite: () => {}
  }
}
