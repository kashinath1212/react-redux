import React from "react";
import { connect, useSelector } from "react-redux";
import UserApi from "./UserApi";

function User() {
  const userData = useSelector((state) => state.users);

  const randomNum10 = Math.round(Math.random() * 10) + 1;
  const randomNum5 = Math.round(Math.random() * 5) + 1;
  console.log(randomNum10,randomNum5);

  //   console.log(userData);
  return (
    <div className="Card_row">
      {userData.loading ? (
        <h2>loading...</h2>
      ) : userData.error ? (
        <h2>{userData.error}</h2>
      ) : (
        userData &&
        userData?.users?.map(
          (item, index) =>
            item.postId < 100 && (
              <div
                key={item?.id}
                className={`cards ${
                  index % randomNum10 === 0
                    ? "bgColorblue"
                    : index % randomNum5 === 0
                    ? "bgColoryellow"
                    : ""
                }`}
                style={{ position: "relative" }}
              >
                <div>
                  <p style={{ position: "absolute", top: "0px" }}>{item.id}.</p>
                  <h3>{item?.name}</h3>
                  <p style={{fontSize: '14px'}}>{item?.email}</p>
                  <div>{item?.body}</div>
                </div>
              </div>
            )
        )
      )}
      <UserApi />
    </div>
  );
}

export default connect()(User);
