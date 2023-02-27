import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components';
import { getMovieCast, alertOnError } from 'services';
import { Item } from './Cast.styled';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    const getCast = async () => {
      try {
        setLoading(true);
        const { castInfo, cancel } = await getMovieCast(
          movieId,
          controller.signal
        );
        if (cancel) return;
        setCast(castInfo);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getCast();
    return () => controller.abort();
  }, [movieId]);

  useEffect(() => {
    if (error) alertOnError();
  }, [error]);

  return (
    <>
      {loading && <Loader />}
      {cast && (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => (
            <Item key={id}>
              <img src={profile_path} alt={name} />
              <p>
                <b>{name}</b> as <span>"{character}"</span>
              </p>
            </Item>
          ))}
        </ul>
      )}
      {cast?.length === 0 && <p>There is no info about cast.</p>}
    </>
  );
}
