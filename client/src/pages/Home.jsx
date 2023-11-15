import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          <h1>Hello </h1>
          <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          Meet your fellow music enthusiasts.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
