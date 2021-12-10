import "./profil.css";

function Profil() {
    return (
      <div className="Profil">
          <div className="profil-left"> 
            <div className="profil-left-wrapper"> 
                <h2 className="profil-intro"> Hello, My name is  </h2>
                <h1 className="profil-name"> Othman Boutab</h1>
            
                    <div className="profil-title">
                        <div className="profil-title-wrapper">
                            <div className="profil-title-item">Front End Developer</div>
                            <div className="profil-title-item">Back End Developer</div>
                            <div className="profil-title-item">Full stack Developer</div>
                        </div>
                    </div>

                    <div className="profil-desc">
                        <p>  &lt;p&gt; Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis ipsa reiciendis sint molestias at doloremque animi nemo, debitis expedita pariatur beatae alias odio amet enim iusto dolorem, obcaecati itaque. &lt;/p&gt; </p>
                    </div>
                </div>
          </div>
          <div className="profil-right">
          </div>

          
          
      </div>
    );


  }



  
  
  export default Profil;