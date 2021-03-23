import axios from 'axios';
import { Component } from 'react';

class BookDetailsView extends Component {
  state = {
    id: null,
    descr: null,
    genre: null,
    imgUrl: null,
    title: null,
    author: null,
  };

  async componentDidMount() {
    const { bookId } = this.props.match.params;

    const response = await axios.get(
      `http://localhost:3001/books/${bookId}?_expand=author`,
    );

    this.setState({ ...response.data });
  }

  render() {
    const { bookId } = this.props.match.params;
    const { descr, genre, imgUrl, title, author } = this.state;

    console.log(title);

    return (
      <>
        <h1>Это страница одной книги {bookId}</h1>
        <img src={imgUrl} alt={title} />
        <h2>{title}</h2>
        {author && <p>{author.name}</p>}
        <p>{genre}</p>
        <p>{descr}</p>
      </>
    );
  }
}

export default BookDetailsView;
