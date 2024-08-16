import Netflexdata from "../api/Netflexdata.json";
import { SeriesCard } from "./SeriesCard";

export const NetflexSeries = () => {
  return (
    <ul className="Container">
      {Netflexdata.map((currentElment) => (
        <SeriesCard key={currentElment.id} data={currentElment} />
      ))}
      ;
    </ul>
  );
};

// export default NetflexSeries;ex
