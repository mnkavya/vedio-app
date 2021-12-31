import { getFormatteddata, getYoutubeID } from './logic';

export const localStore = (data) => {
  const youtubeID = getYoutubeID(data.url);
  let JsonData = getFormatteddata(data);

  if (data.comments != null) {
    let previousComments = localStorage.getItem(youtubeID)
      ? JSON.parse(localStorage.getItem(youtubeID))
      : [];

    if (previousComments.length > 0) {
      previousComments.push(JsonData);
      localStorage.setItem(youtubeID, JSON.stringify(previousComments));
    } else {
      let comments = [];
      comments.push(JsonData);
      localStorage.setItem(youtubeID, JSON.stringify(comments));
    }
  }
};
export function LoadPreviousComments(url) {
  let youtubeID = getYoutubeID(url);
  let previousComments = localStorage.getItem(youtubeID)
    ? JSON.parse(localStorage.getItem(youtubeID))
    : [];
  return previousComments;
}
