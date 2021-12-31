export function getYoutubeID(url) {
  let youTubeIdFromLink = url.match(
    /(?:https?:\/\/)?(?:www\.|m\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\/?\?v=|\/embed\/|\/)([^\s&\?\/\#]+)/
  );
  return youTubeIdFromLink[1];
}
export function getFormattedData(data) {
  let jsondata = {
    time: new Date().toLocaleDateString(),
    comments: data.comments,
  };
  return jsondata;
}
export function fetchData(key) {
  // filtering existed comments/data based on vedio id
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
}
