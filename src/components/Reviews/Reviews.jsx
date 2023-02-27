import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components';
import { getMovieReviews, alertOnError } from 'services';
import { Item } from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    const getReviews = async () => {
      try {
        setLoading(true);
        const { reviewsInfo, cancel } = await getMovieReviews(
          movieId,
          controller.signal
        );
        if (cancel) return;
        setReviews(reviewsInfo);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getReviews();
  }, [movieId]);

  useEffect(() => {
    if (error) alertOnError();
  }, [error]);

  return (
    <>
      {loading && <Loader />}
      {reviews && (
        <ul>
          {reviews.map(({ id, author, avatar_path, content, created_at }) => (
            <Item key={id}>
              <img src={avatar_path} alt={author} />
              <p>
                <b>Author:</b> {author}
              </p>
              <p>{created_at}</p>
              <p>{content}</p>
            </Item>
          ))}
        </ul>
      )}
      {reviews?.length === 0 && (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
}
