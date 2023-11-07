import { useQuery } from "@apollo/client";

import ProfileList from "../components/ProfileList";

import { QUERY_PROFILES } from "../utils/queries";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          <h1>Hello {location.state.id}</h1>
        </div>
      </div>
    </main>
  );
};

export default Home;
