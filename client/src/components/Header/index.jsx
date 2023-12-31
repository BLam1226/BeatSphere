import { Link, useLocation } from "react-router-dom";
import Auth from "../../utils/auth";

const Header = () => {
  const location = useLocation();

  const logout = () => {
    event.preventDefault();
    Auth.logout();
  };

  // List of routes where you want to hide the buttons (not the entire header)
  const routesWithoutButtons = ["/Login", "/Signup"];

  // Check if the current route should hide the buttons
  const shouldHideButtons = routesWithoutButtons.includes(location.pathname);

  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <Link className="logs text-dark" to="/">
          <h1 className=" m-0" style={{ fontSize: "3rem" }}>
            BeatSphere
          </h1>
        </Link>
        {!shouldHideButtons && (
          <div>
            {Auth.loggedIn() ? (
              <>
                <Link className="btn btn-lg btn-primary m-2" to="/Globepage">
                  Globe
                </Link>
                <Link className="btn btn-lg btn-primary m-2" to="/Countrypage">
                  Country
                </Link>
                <Link className="btn btn-lg btn-primary m-2" to="/Player">
                  SpotifyPlayer
                </Link>
                <Link
                  to="/Login"
                  className="btn btn-lg btn-light m-2"
                  onClick={logout}
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link className="log btn btn-lg btn-primary m-2" to="/Login">
                  Login
                </Link>
                <Link className="log btn btn-lg btn-light m-2" to="/Signup">
                  Signup
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
