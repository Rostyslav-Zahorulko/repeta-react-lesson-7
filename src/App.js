// https://www.youtube.com/watch?v=K6lAf9AEB_g - вебинар № 7

// https://youtu.be/K6lAf9AEB_g?t=2411 - (вложенная навигация)
// https://youtu.be/K6lAf9AEB_g?t=3686 - (вложенный маршрут)
// https://youtu.be/K6lAf9AEB_g?t=5605 - (еще раз вложенная навигация)

import { Route, NavLink, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import BooksView from './views/BooksView';
import NotFoundView from './views/NotFoundView';
import BookDetailsView from './views/BookDetailsView';

const App = () => (
  <>
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/authors"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Authors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/books"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Books
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/authors" component={AuthorsView} />

      <Route exact path="/books" component={BooksView} />
      <Route path="/books/:bookId" component={BookDetailsView} />
      <Route component={NotFoundView} />
    </Switch>
  </>
);

export default App;
