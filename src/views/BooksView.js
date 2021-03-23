import axios from 'axios';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class BooksView extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const response = await axios.get('http://localhost:3001/books');

    this.setState({ books: response.data });
  }

  render() {
    const { books } = this.state;
    const { match } = this.props;

    return (
      <>
        <h1>Это страница книг</h1>
        <ul>
          {books.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${match.url}/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default BooksView;
