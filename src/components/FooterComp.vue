<template>
  <div>
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <!-- About Section -->
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Kayden Hendricks <i>CODE WANTS TO BE SIMPLE</i> is an initiative to help upcoming programmers. The goal is to provide efficient code snippets in various languages, such as C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL, and Algorithms.</p>
            <p class="copyright-text">&copy; {{ new Date().getFullYear() }} All Rights Reserved by 
              <a href="#">Kayden Hendricks</a>.
            </p>
          </div>

          <!-- Categories Section -->
          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="#">HTML</a></li>
              <li><a href="#">CSS</a></li>
              <li><a href="#">VUE3.JS</a></li>
              <li><a href="#">JavaScript</a></li>
              <li><a href="#">MySQL</a></li>
              <li><a href="#">Node</a></li>
            </ul>
          </div>

          <!-- Quick Links Section -->
          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <h6>Socials</h6>
            <ul>
              <li><i class="bi bi-linkedin"></i></li>
              <li><i class="bi bi-github"></i></li>
            </ul>
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
      // Add data if needed
    };
  }
};
</script>

<style scoped>
/* Footer Main Styling */
.site-footer {
  background-color: #000000ae;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
}

.site-footer hr {
  border-top-color: #bbb;
  opacity: 0.5;
}

.site-footer h6 {
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
}

.site-footer a {
  color: #737373;
}

.site-footer a:hover {
  color: #3366cc;
  text-decoration: none;
}

/* Footer Links */
.footer-links {
  padding-left: 0;
  list-style: none;
}

.footer-links li {
  display: block;
}

.footer-links a {
  color: #737373;
}

.footer-links a:hover {
  color: #3366cc;
  text-decoration: none;
}

/* Social Media Styling */
.social-icons {
  text-align: right;
}

.social-icons a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: #33353d;
}

.social-icons a:hover {
  color: #fff;
  background-color: #29aafe;
}

.social-icons a.facebook:hover {
  background-color: #3b5998;
}

.social-icons a.twitter:hover {
  background-color: #00aced;
}

.social-icons a.linkedin:hover {
  background-color: #007bb6;
}

.social-icons a.dribbble:hover {
  background-color: #ea4c89;
}

/* Responsive Styling */
@media (max-width: 991px) {
  .site-footer [class^="col-"] {
    margin-bottom: 30px;
  }
}

@media (max-width: 767px) {
  .site-footer {
    padding-bottom: 0;
  }
  .site-footer .social-icons {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .footer-links li {
    display: inline-block;
    margin-right: 15px;
  }
}

@media (max-width: 360px) {
  .site-footer .social-icons {
    text-align: center;
  }
}
</style>
