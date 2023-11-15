import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if the current pathname is the home page
  const isHomePage = location.pathname === '/';

  // If it's not the home page, do not render the footer
  if (!isHomePage) {
    return null;
  }

  // If it's the home page, render the footer
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        <h4>&copy; {new Date().getFullYear()} - BeatSphere</h4>
      </div>
    </footer>
  );
};

export default Footer;
