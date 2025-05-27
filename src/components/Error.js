import { useRouteError } from "react-router-dom";

const Error =() => {
    const err =useRouteError()
    console.log(err);
    return (
      <div>
        <h1>OOPs!!!</h1>
        <h1>Something Went Wrong</h1>
        <h1>Status Code : {err.status}</h1>
        <h1>{err.error}</h1>
      </div>
    );
};

export default Error;

/*
{
    "status": 404,
    "statusText": "Not Found",
    "internal": true,
    "data": "Error: No route matches URL \"/juijio\"",
    "error": {}
}
*/