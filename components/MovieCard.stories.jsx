import MovieCard from './MovieCard'

export default {
  title: 'Components/MovieCard',
  component: MovieCard,
  tags: ['autodocs'],
  argTypes: {
    movie: {
      control: 'object',
      description: 'Movie object containing title, year, poster, and imdbID'
    },
    isFavorite: {
      control: 'boolean',
      description: 'Whether the movie is in favorites'
    },
    onToggleFavorite: {
      action: 'toggleFavorite',
      description: 'Callback function when favorite button is clicked'
    }
  }
}

const sampleMovie = {
  imdbID: 'tt0111161',
  Title: 'The Shawshank Redemption',
  Year: '1994',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
}

export const Default = {
  args: {
    movie: sampleMovie,
    isFavorite: false,
    onToggleFavorite: () => {}
  }
}

export const Favorite = {
  args: {
    movie: sampleMovie,
    isFavorite: true,
    onToggleFavorite: () => {}
  }
}

export const WithDifferentMovie = {
  args: {
    movie: {
      imdbID: 'tt0068646',
      Title: 'The Godfather',
      Year: '1972',
      Poster: 'https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
    },
    isFavorite: false,
    onToggleFavorite: () => {}
  }
}

export const WithNoPoster = {
  args: {
    movie: {
      imdbID: 'tt1234567',
      Title: 'Unknown Movie',
      Year: '2020',
      Poster: 'N/A'
    },
    isFavorite: false,
    onToggleFavorite: () => {}
  }
}
