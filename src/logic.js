export function getYoutubeID(url) {
  let youTubeIdFromLink = url.match(
    /(?:https?:\/\/)?(?:www\.|m\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\/?\?v=|\/embed\/|\/)([^\s&\?\/\#]+)/
  );
  return youTubeIdFromLink[1];
}
export function getFormatteddata(data) {
  let jsondata = {
    time: new Date().toLocaleString(),
    comments: data.comments,
  };

  return jsondata;
}
