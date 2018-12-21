import React from "react";

export function FormStatus(props) {
  console.log(props);
  let result =
    props.status === true ? (
      <div>Success!</div>
    ) : (
      <div>
        Seems there has been an error on the server-side. Refresh and try again.
      </div>
    );
  return { result };
}
