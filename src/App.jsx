import "./index.css";
// import { ProfileCard } from "./components/Profile";
import { NetflexSeries } from "./components/NetflexSeries";
// import Profile from "./components/Profile";

function App() {
  return (
    <>
      <h1
        style={{
          margin: "0 auto",
          paddingTop: "5px",
          textAlign: "center",
          fontSize: "4rem",
          textDecoration: "underline",
        }}
      >
        List of Best Netflix series
      </h1>
      <NetflexSeries />
      {/* <ProfileCard /> */}
      {/* <Profile /> */}
    </>
  );
}

export default App;
