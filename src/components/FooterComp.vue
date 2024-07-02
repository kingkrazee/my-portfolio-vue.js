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
          <div class="col-4">
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
    background-color: transparent;
    padding: 10px;
    text-align: center;
    color: #000000;
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
    height: 3rem;
  }
  
  #feet {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto; /* Centers the footer horizontally */
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
  </style>
  