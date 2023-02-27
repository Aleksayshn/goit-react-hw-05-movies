const baseUrl = {
  POSTER: 'https://image.tmdb.org/t/p/w500',
  DEFAULT_POSTER: 'https://dummyimage.com/500x750/ccc/fff.jpg&text=No+poster',
  PHOTO: 'https://image.tmdb.org/t/p/w300',
  DEFAULT_PHOTO: 'https://dummyimage.com/300x450/ccc/fff.jpg&text=No+photo',
  AVATAR: 'https://image.tmdb.org/t/p/w45',
  DEFAULT_AVATAR: 'https://dummyimage.com/45x45/ccc/fff.jpg&text=M',
};

export const getPosterUrl = url =>
  url ? `${baseUrl.POSTER}${url}` : baseUrl.DEFAULT_POSTER;

export const getPhotoUrl = url =>
  url ? `${baseUrl.PHOTO}${url}` : baseUrl.DEFAULT_PHOTO;

export const getAvatarUrl = url =>
  url && !url.includes('http')
    ? `${baseUrl.AVATAR}${url}`
    : baseUrl.DEFAULT_AVATAR;
