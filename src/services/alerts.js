import { toast } from 'react-toastify';

export const alertOnSearch = (moviesLength, totalResults) => {
  if (totalResults === 0) {
    toast.error(
      'Sorry, there are no movies matching your search query. Please try again.'
    );
  }
  if (moviesLength < 20 && totalResults !== 0) {
    toast.info("We're sorry, but you've reached the end of search results.");
  }
};

export const alertOnError = () =>
  toast.error('Oooops! Something went wrong...');

export const alertOnEmptyQuery = () =>
  toast.warning('Please, enter something to search...');

export const alertOnRepeatedQuery = query =>
  toast.warning(`We have already found <${query}>!`);
