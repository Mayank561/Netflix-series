import React from "react";

const Profile = () => {
  return (
    <div>
      <ProfileCard
        name="mayank"
        age={23}
        greeting={
          <div>
            <strong>Hello Mayank, keep up the great work!</strong>
          </div>
        }
      >
        <p>Hobbies: Gaming, cooking</p>
        <button>Contact</button>
      </ProfileCard>

      <ProfileCard
        name="abhay"
        age={24}
        greeting={
          <div>
            <strong>Hello Abhay, keep up the great work!</strong>
          </div>
        }
      >
        <p>Hobbies: Hacking, games</p>
        <button>Hacked!!</button>
      </ProfileCard>
    </div>
  );
};

export default Profile;

export function ProfileCard({ name, age, greeting, children }) {
  return (
    <>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <div>{greeting}</div>
      <p>{children}</p>
    </>
  );
}
