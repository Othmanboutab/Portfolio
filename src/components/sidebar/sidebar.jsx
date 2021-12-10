import "./sidebar.css";


function Sidebar() {
    return (
      <div className="Sidebar">
          <img  src="./images/logo.png" alt="Logo" ></img>
          <div className="info">
            <ul>
                <li>Accueil </li>
                <li>Profil</li>
                <li>Compétence</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
           </div>
      </div>
    );
  }
  
  export default Sidebar;