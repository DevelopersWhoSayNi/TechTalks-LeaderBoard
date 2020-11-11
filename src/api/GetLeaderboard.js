import Axios from "axios";

const GetLeaderboard = () => {
  let url =
    "https://n2upx9j5m8.execute-api.eu-west-1.amazonaws.com/dev/leaderboard";

  return Axios.get(url)
    .then((response) => {
      if (response) {
        return response.data.body.result;
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
