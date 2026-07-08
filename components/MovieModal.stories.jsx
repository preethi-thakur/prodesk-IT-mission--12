import MovieModal from './MovieModal'

export default {
  title: 'Components/MovieModal',
  component: MovieModal,
  tags: ['autodocs'],
  argTypes: {
    movie: {
      control: 'object',
      description: 'Movie object containing all movie details'
    },
    onClose: {
      action: 'close',
      description: 'Callback function when modal is closed'
    },
    onToggleFavorite: {
      action: 'toggleFavorite',
      description: 'Callback function when favorite button is clicked'
    },
    isFavorite: {
      control: 'boolean',
      description: 'Whether the movie is in favorites'
    }
  }
}

const sampleMovie = {
  imdbID: 'tt0111161',
  Title: 'The Shawshank Redemption',
  Year: '1994',
  Rated: 'R',
  Plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDM0LWEzZWQtY2UxYWVkNGY2ZjljXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
}

export const Default = {
  args: {
    movie: sampleMovie,
    onClose: () => {},
    onToggleFavorite: () => {},
    isFavorite: false
  }
}

export const Favorite = {
  args: {
    movie: sampleMovie,
    onClose: () => {},
    onToggleFavorite: () => {},
    isFavorite: true
  }
}

export const DifferentMovie = {
  args: {
    movie: {
      imdbID: 'tt0068646',
      Title: 'The Godfather',
      Year: '1972',
      Rated: 'R',
      Plot: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son.',
      Poster: 'https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
    },
    onClose: () => {},
    onToggleFavorite: () => {},
    isFavorite: false
  }
}

export const LongPlot = {
  args: {
    movie: {
      imdbID: 'tt0468569',
      Title: 'The Dark Knight',
      Year: '2008',
      Rated: 'PG-13',
      Plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg'
    },
    onClose: () => {},
    onToggleFavorite: () => {},
    isFavorite: false
  }
}

export const NoPoster = {
  args: {
    movie: {
      imdbID: 'tt1234567',
      Title: 'Unknown Movie',
      Year: '2020',
      Rated: 'N/A',
      Plot: 'No plot available.',
      Poster: 'N/A'
    },
    onClose: () => {},
    onToggleFavorite: () => {},
    isFavorite: false
  }
}
