import { Link } from 'react-router-dom';

const AuthorBooks = ({ books }) => {
  return (
    <>
      <h1>Компонент книг автора</h1>
      <ul>
        {books.map(({ title, id }) => (
          <li key={id}>
            <Link to={`/books/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AuthorBooks;
