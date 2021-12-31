import { fetchData, getFormattedData, getYoutubeID } from '../Utils/utils';
import { storeData } from './Store';

export const localStore = (data) => {
  const youtubeID = getYoutubeID(data.url);
  let JsonData = getFormattedData(data);

  if (data.comments != null) {
    let previousComments = fetchData(youtubeID);
    if (previousComments.length > 0) {
      previousComments.push(JsonData);
      storeData(youtubeID, previousComments);
    } else {
      let comments = [];
      comments.push(JsonData);
      storeData(youtubeID, comments);
    }
  }
};
export function LoadPreviousComments(url) {
  let youtubeID = getYoutubeID(url);
  let previousComments = fetchData(youtubeID);
  return previousComments;
}
