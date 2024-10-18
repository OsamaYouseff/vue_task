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
              <img src="@/assets/icons/logo-twitter.svg" alt="twitter-logo" />
            </span>
            <span class="bg-black">
              <img src="@/assets/icons/logo-fb.svg" alt="facebook-logo" />
            </span>
            <span>
              <img
                src="@/assets/icons/logo-instagram.svg"
                alt="instagram-logo"
              />
            </span>
            <span>
              <img src="@/assets/icons/logo-github.svg" alt="github-logo" />
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
  padding: 1.25rem;
  margin: 0 auto;
  transform: translateY(-50%);
  border-radius: 1.25rem;
  margin-top: 9.375rem;
  flex-wrap: wrap;
}
.news-letter h2 {
  font-size: 2.5rem;
  font-weight: 900;
  width: 37.5rem;
}
@media (max-width: 61.9375rem) {
  .news-letter {
    margin-top: 12.5rem;
    margin-bottom: -10.625rem;
    padding: 30px 20px !important;
  }
}

@media (max-width: 48rem) {
  .news-letter {
    margin-top: 12.5rem;
    margin-bottom: -10.625rem;
  }

  .news-letter h2 {
    font-size: 1.875rem;
  }
}

.input-group {
  max-width: 21.8125rem;
}
.input-container {
  position: relative;
  height: 2.875rem;
}

.input-container img {
  position: absolute;
  left: 0.9375rem;
  top: 50%;
  transform: translateY(-50%);
}

input {
  padding-left: 3.125rem;
}

@media (max-width: 48rem) {
  input {
    font-size: 14px;
  }
}

button {
  height: 2.875rem;
}

.footer-details {
  margin-top: -3.125rem;
  border-bottom: 0.0625rem solid hsla(0, 0%, 0%, 0.1);
  gap: 0.9375rem 0;
}

.footer-details > div {
  min-width: 9.375rem;
}

.social-box {
  max-width: 15.5rem;
}
@media (max-width: 48rem) {
  .footer-details {
    padding-left: 0.625rem !important;
    padding-right: 0.625rem !important;
  }

  .social-box {
    max-width: 100%;
  }
}

.logo {
  font-weight: 900;
  margin-top: -0.625rem;
}

.social-icons span {
  padding: 0.3125rem;
  width: 1.875rem;
  height: 1.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.35s ease;
  border: 0.0625rem solid hsla(0, 0%, 0%, 0.2);
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
  width: 4.375rem;
  transform: translateX(0.625rem);
  cursor: pointer;
}
@media (max-width: 48rem) {
  .copyright {
    justify-content: center !important;
    gap: 0.625rem 0;
  }
  .payments img {
    transform: translateX(0rem);
  }
}
</style>
