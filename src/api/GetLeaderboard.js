import Axios from "axios";

const sortList = (list) => {
  var sortedList = list.sort(
    (a, b) => b.Score - a.Score || a.LastFlagUploadedAt - b.LastFlagUploadedAt
  );
  return sortedList;
};

const GetLeaderboard = () => {
  let url =
    "https://n2upx9j5m8.execute-api.eu-west-1.amazonaws.com/dev/leaderboard";

  return Axios.get(url)
    .then((response) => {
      if (response) {
        return sortList(response.data.body.result);
      } else {
        console.log("ffffffuuuuuuu");
        return null;
      }
    })
    .catch((error) => {
      return Promise.reject(new Error("fail to get results: ", error));
    });
};

export default GetLeaderboard;
