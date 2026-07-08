import Navbar from './Navbar'

export default {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
    searchTerm: {
      control: 'text',
      description: 'Current search term in the input field'
    },
    onSearch: {
      action: 'search',
      description: 'Callback function when search input changes'
    },
    favoriteCount: {
      control: 'number',
      description: 'Number of favorite movies'
    }
  }
}

export const Default = {
  args: {
    searchTerm: '',
    onSearch: () => {},
    favoriteCount: 0
  }
}

export const WithSearchTerm = {
  args: {
    searchTerm: 'Inception',
    onSearch: () => {},
    favoriteCount: 0
  }
}

export const WithFavorites = {
  args: {
    searchTerm: '',
    onSearch: () => {},
    favoriteCount: 5
  }
}

export const WithSearchAndFavorites = {
  args: {
    searchTerm: 'The Dark Knight',
    onSearch: () => {},
    favoriteCount: 12
  }
}

export const LongSearchTerm = {
  args: {
    searchTerm: 'The Lord of the Rings: The Fellowship of the Ring',
    onSearch: () => {},
    favoriteCount: 3
  }
}
