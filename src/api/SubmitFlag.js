import Axios from "axios";

const SubmitFlag = (body) => {
    const url =
    "https://3o4i6eqwsd.execute-api.eu-west-1.amazonaws.com/dev/submitflag";

    return Axios.post(url, body)
        .then((response) => {
            if (response.data) {
                return response.data;
            }
        })
        .catch((error) => {
            return Promise.reject(new Error("fail to submit flag: ", error.response));
        });
};

export default SubmitFlag;