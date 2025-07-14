import "../styles/footer.css"
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <footer className="footer_container">
      <div className="footer_content">
        <div className="footer_logo">
          <h3>Blogify</h3>
          <p className="footer_tagline">Turn thoughts into stories</p>
        </div>
        
        <div className="footer_links">
          <div className="footer_column">
            <h4 className="footer_heading">Explore</h4>
            <NavLink to="/" className="footer_link">Home</NavLink>
            <NavLink to="/trending" className="footer_link">Trending</NavLink>
            <NavLink to="/categories" className="footer_link">Categories</NavLink>
          </div>
          
          <div className="footer_column">
            <h4 className="footer_heading">Company</h4>
            <NavLink to="/about" className="footer_link">About</NavLink>
            <NavLink to="/contact" className="footer_link">Contact</NavLink>
            <NavLink to="/privacy" className="footer_link">Privacy Policy</NavLink>
          </div>
          
          <div className="footer_column">
            <h4 className="footer_heading">Connect</h4>
            <a href="https://twitter.com" className="footer_link">Twitter</a>
            <a href="https://instagram.com" className="footer_link">Instagram</a>
            <a href="https://linkedin.com" className="footer_link">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="footer_copyright">
        <p>© {new Date().getFullYear()} Blogify. All rights reserved.</p>
      </div>
    </footer>
  );
}