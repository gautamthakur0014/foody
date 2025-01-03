import { useState, useEffect } from "react";

const User = (props) => {
  const [userData, setuserData] = useState({});
  useEffect(() => {
    // fetchdata();
  }, []);

  const fetchdata = async () => {
    const response = await fetch(`https://api.github.com/users/${props.argu}`);

    const json = await response.json();
    console.log(json);
    setuserData(json);
  };
  return (
    <div className="user-card">
      <div className="user-pic">
        <img className="profile" src={userData.avatar_url} alt="pic"></img>
      </div>
      <p>{userData.login}login</p>
      <p>{userData.bio}bio</p>
      <p>{userData.email}emil</p>
      <p>{userData.location}location</p>
      <p>
        
          <a class="fa-brands fa-github fa-2xl no-decoration" href="https://github.com/gautamthakur0014"></a>
        
        <i class="fa-brands fa-instagram fa-2xl no-decoration">
          <a href=""></a>
        </i>
        <i class="fa-brands fa-linkedin fa-2xl no-decoration">
          <a href=""></a>
        </i>
      </p>
    </div>
  );
};

export default User;
