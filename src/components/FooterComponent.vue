<script setup lang="ts"></script>
<template>
  <footer>
    <!-- news letter -->
    <div class="container-lg">
      <div
        class="news-letter bg-black text-white p-5 d-flex justify-content-between gap-3"
      >
        <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
        <div
          class="input-group d-flex align-items-center gap-3 flex-column justify-content-center"
        >
          <div class="input-container w-100">
            <img src="@/assets/icons/mail.svg" alt="mail-icon" />
            <input
              class="w-100 h-100 rounded-pill border-0 pl-4"
              type="text"
              placeholder="Enter your email address"
            />
          </div>
          <button class="btn bg-white text-black rounded-pill py-2 px-2 w-100">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      <!-- footer -->

      <div class="footer-details p-5 d-flex justify-content-between flex-wrap">
        <div class="social-box">
          <RouterLink
            class="logo fs-2 text-decoration-none text-black mb-3 d-block"
            to="/"
            >SHOP.CO
          </RouterLink>
          <p>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div class="social-icons d-flex gap-3 align-items-center mt-3">
            <span>
              <i class="bi bi-twitter"></i>
            </span>
            <span>
              <i class="bi bi-facebook"></i>
            </span>
            <span>
              <i class="bi bi-instagram"></i>
            </span>
            <span>
              <i class="bi bi-github"></i>
            </span>
          </div>
        </div>
        <div class="company-box d-flex gap-2 flex-column">
          <h5 class="mb-3">Company</h5>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Works</a>
          <a href="#">Career</a>
        </div>
        <div class="help-box d-flex gap-2 flex-column">
          <h5 class="mb-3">Help</h5>
          <a href="#">Customer Support</a>
          <a href="#">Delivery Details</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div class="FAQ-box d-flex gap-2 flex-column">
          <h5 class="mb-3">FAQ</h5>
          <a href="#">Account</a>
          <a href="#">Manage Deliveries</a>
          <a href="#">Orders</a>
          <a href="#">Payments</a>
        </div>
        <div class="Resources-box d-flex gap-2 flex-column">
          <h5 class="mb-3">Resources</h5>
          <a href="#">Free eBooks</a>
          <a href="#">Development Tutorial</a>
          <a href="#">How to - Blog</a>
          <a href="#">Youtube Playlist</a>
        </div>
      </div>

      <!-- copyright -->
      <div
        class="copyright py-3 pb-5 d-flex justify-content-between align-items-center flex-wrap"
      >
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div class="payments">
          <img src="@/assets/icons/Badge.svg" alt="visa-icon" />
          <img src="@/assets/icons/Badge (1).svg" alt="visa-icon" />
          <img src="@/assets/icons/Badge (2).svg" alt="visa-icon" />
          <img src="@/assets/icons/Badge (3).svg" alt="visa-icon" />
          <img src="@/assets/icons/Badge (4).svg" alt="visa-icon" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: #f0f0f0;
}

.news-letter {
  background: #000 !important;
  padding: 20px;
  margin: 0 auto;
  transform: translateY(-50%);
  border-radius: 20px;
  margin-top: 150px;
  flex-wrap: wrap;
}
.news-letter h2 {
  font-size: 40px;
  font-weight: 900;
  width: 600px;
}
@media (max-width: 991px) {
  .news-letter {
    margin-top: 200px;
    margin-bottom: -170px;
  }
}

@media (max-width: 768px) {
  .news-letter {
    margin-top: 200px;
    margin-bottom: -170px;
  }

  .news-letter h2 {
    font-size: 30px;
  }
}

.input-group {
  max-width: 349px;
}
.input-container {
  position: relative;
  height: 46px;
}

.input-container img {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
}

input {
  padding-left: 50px;
}

button {
  height: 46px;
}

.footer-details {
  margin-top: -50px;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.1);
  gap: 15px 0;
}

.footer-details > div {
  min-width: 150px;
}

.social-box {
  max-width: 248px;
}
@media (max-width: 768px) {
  .footer-details {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }

  .social-box {
    max-width: 100%;
  }
}

.logo {
  font-weight: 900;
  margin-top: -10px;
}

.social-icons span {
  padding: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  background: #f0f0f0;
  color: #000;
  transition: all 0.35s ease;
  border: 1px solid hsla(0, 0%, 0%, 0.2);
}

.social-icons span:hover {
  background: #000;
  color: white;
}

a {
  text-decoration: none;
  color: hsla(0, 0%, 0%, 0.6);
}

h5 {
  text-transform: uppercase;
}

.copyright p {
  color: hsla(0, 0%, 0%, 0.6);
}

.payments img {
  width: 70px;
  transform: translateX(10px);
  cursor: pointer;
}
@media (max-width: 768px) {
  .copyright {
    justify-content: center !important;
    gap: 10px 0;
  }
  .payments img {
    transform: translateX(0px);
  }
}
</style>
