import { Link, useLocation } from 'react-router-dom';
import { List, Li, WrapperImage, Title, Content } from './MovieList.style';

const MovieList = ({ dataList }) => {
  const location = useLocation();

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <List>
      {dataList.map(({ id, title, poster_path }) => (
        <Li key={id}>
          <WrapperImage>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : defaultImg
                }
                alt={title}
                width="100%"
              />
            </Link>
          </WrapperImage>

          <Content>
            <Link to={`/movies/${id}`} title={title}>
              <Title>{title}</Title>
              <p>{}</p>
            </Link>
          </Content>
        </Li>
      ))}
    </List>
  );
};

export default MovieList;
