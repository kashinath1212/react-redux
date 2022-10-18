import axios from "axios";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import {
  fetchFailed,
  fetchRequest,
  fetchSuccess,
} from "../../redux/userReduce/UserAction";

function UserApi() {
  const dispatch = useDispatch();
  //   const fetchApi = async () => {
  // };
  useEffect(() => {
    async function fetchApi() {
      try {
        dispatch(fetchRequest());
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        console.log(res, "dklajfkdaj");
        if (!res) throw new Error(`${res.message} (${res.status})`);
        const users = res.data;
        dispatch(fetchSuccess(users));
      } catch (err) {
        console.log(err);
        const errMsg = err.message;
        dispatch(fetchFailed(errMsg));
      }
    }
    fetchApi();
  }, [dispatch]);

  return;
}

export default connect()(UserApi);
