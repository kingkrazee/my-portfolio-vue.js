<template>
    <div>
      <footer>
        <div id="feet" class="row">
          <div class="col-4">
            <div class="hub">
              <a href="https://github.com/kingkrazee" target="_blank">
                <img :src="hub" alt="GitHub">
              </a>
            </div>
          </div>
          <div id="year" class="col-4">
            &copy; {{ new Date().getFullYear() }} Kayden Hendricks
          </div>
          <div class="col-4">
            <div class="linky">
              <a href="https://www.linkedin.com/in/kayden-hendricks-2b5871316/" target="_blank">
                <img :src="linky" alt="LinkedIn">
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        hub: 'https://kingkrazee.github.io/eccomerce/images/github.png',
        linky: 'https://kingkrazee.github.io/eccomerce/images/linkedin.png'
      };
    }
  };
  </script>
  
  <style>
  footer {
    background: rgba(0, 0, 0, 0.293);
background-repeat: no-repeat;
    padding: 10px;
    text-align: center;
    color: #000000;
    /* position: fixed; */
    bottom: 0;
    width: 100%;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
    height: 3rem;
    z-index: 1; /* Ensure the footer is on top of .project-container */
  }
  
  #feet {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto; 
    z-index: 50;
  }
  
  .hub,
  .linky {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .hub img,
  .linky img {
    max-width: 40px; /* Adjust size as needed */
    height: auto; /* Maintain aspect ratio */
  }
  @media only screen and (max-width: 768px) {
  
}

/* For screens 480px and below */
@media (max-width: 480px) {
 

}

@media (max-width: 360px) {
  #feet{
    display: flex;
    justify-content: space-between;
  }
  #year{
    font-size: 10px;
  }
}
  </style>
  