import axios from 'axios';
import { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import AuthorBooks from '../components/AuthorBooks';

class AuthorsView extends Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      'http://localhost:3001/authors?_embed=books',
    );

    this.setState({ authors: response.data });
  }

  render() {
    const { authors } = this.state;
    const { match } = this.props;

    return (
      <>
        <h1>Это страница авторов</h1>
        <ul>
          {authors.map(({ id, name }) => (
            <li key={id}>
              <Link to={`${match.url}/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>

        <Route
          path={`${match.path}/:authorId`}
          render={props => {
            const id = Number(props.match.params.authorId);
            const author = authors.find(author => author.id === id);

            return author && <AuthorBooks {...props} books={author.books} />;
          }}
        />
      </>
    );
  }
}

export default AuthorsView;
