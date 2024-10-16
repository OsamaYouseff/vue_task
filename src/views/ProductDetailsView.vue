<script setup lang="ts">
import ExtraProductInfo from "@/components/ProductDetails/ExtraProductInfo.vue";
import SuggestProducts from "@/components/ProductDetails/SuggestProducts.vue";

import Rating from "primevue/rating";
import { onMounted, ref } from "vue";
const itemAmount = ref<number>(2);
const discountAvailable = ref<boolean>(true);
const rating = ref<number>(4);

const activeImg = ref<number>(1);
const activeColor = ref<number>(0);
const activeSize = ref<number>(2);

const currentImgUrl = ref<string>(
  "https://s3-alpha-sig.figma.com/img/f04a/017d/b094f9a20c2328f54a31b153619784f3?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E-602NepkNOhB4IjylGkyZb-vW6W5QlRBUZQLhDNVvbXCfKdHTci1LEg~gk3Gq4~f03vQBJLyDdpYehBGeHVUtCxiauX3Cn5LUaFEfVTyOUsDwiQpaxOI7w4Uvz4PWuhYpMxwNe3Qelv8oaobWuyVEZYg7PcRhmTVfXBhJne~g6F~L3CdYriHXDBeACw6zTurZSfffRxrq16ciHiRU~r7GKEYRkMjcdgGVj56xXUwkJCuzYjbluJcgPO3gmKeki7G6t0sQAwGsmEXJF2-Bl5Dv9EME91eOrmjatX2IlaagwpM-idrXttdPHhDs8rc8Avp1klApcqm~LLvmsMZCGFYg__"
);

const toggleCurrentImg = (id: number, src: string) => {
  activeImg.value = id;
  currentImgUrl.value = src;
};

interface Image {
  id: number;
  src: string;
  alt: string;
}

const images: Image[] = [
  {
    id: 1,
    src: "https://s3-alpha-sig.figma.com/img/f04a/017d/b094f9a20c2328f54a31b153619784f3?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E-602NepkNOhB4IjylGkyZb-vW6W5QlRBUZQLhDNVvbXCfKdHTci1LEg~gk3Gq4~f03vQBJLyDdpYehBGeHVUtCxiauX3Cn5LUaFEfVTyOUsDwiQpaxOI7w4Uvz4PWuhYpMxwNe3Qelv8oaobWuyVEZYg7PcRhmTVfXBhJne~g6F~L3CdYriHXDBeACw6zTurZSfffRxrq16ciHiRU~r7GKEYRkMjcdgGVj56xXUwkJCuzYjbluJcgPO3gmKeki7G6t0sQAwGsmEXJF2-Bl5Dv9EME91eOrmjatX2IlaagwpM-idrXttdPHhDs8rc8Avp1klApcqm~LLvmsMZCGFYg__",
    alt: "preview-image",
  },
  {
    id: 2,
    src: "https://s3-alpha-sig.figma.com/img/aecd/8196/485b30fd30b3226e09bb8f8e494c260b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JDSAOREDmk5TCB75ZZw2MRdZqb0PqzkMu4QJxTxmWu1zHSZ3KxD~CsA8yMBd0BkrNjXfTzcvQle0ch67xRnXhY-iomZFjKF99l3Czqa2O7m8CPtcm-IFo6PX2NTIY1MWkhyLnTojM6zS4b~jRX-8-VvYUoAF6JpAHXz92IWffF1KxKATrRO9m4oyqIC8mRgGaT23WFdXPkFJSFOToPhvQtrojo72l1Q5FYHVzjds0fpyJLKnGCqb74~wRRGdSe-dRzJXvCfadhwOWAOqVE8NcLCxM-ZE2vz0Dj9vaGkUfw1NCN8ROzzHFGKVxpco9XtSHTqNpqIUIlCCynXp~Dcjdw__",
    alt: "preview-image",
  },
  {
    id: 3,
    src: "https://s3-alpha-sig.figma.com/img/6115/920b/12942762aefb7c7ac954e78b76284504?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MKQsZul0uc4q5HFN45QoH9axtPVCSknDfwrvWnekXUa2FAbfR8sezRfWmgIav7CuB1SfLdeNJ0Dcx~y3GJNW4jLBV3~7kQhH0BHnG1bggVqa~Jg8rkLUEmsIL5X9yXe6ulul4ZM~E3vUAzWqxFU53RNwrwUEcmAXXVwut1aiTVYcTsjj5JeRWMcnYBQfXt8Bq~U1j2wTzElpSSOC9LOYdDWB53clzc-K544E~Ynl9ZxGDejIVKTwFesnrZ02uDc-kKMX4PLRAZVh2xl3Z6PwmQBmzPj87P8YabxBqbTKLxGs6N3jsUxKnPT~7eYcIpUUFoWHIy~jzxhZOh4hgqlkPQ__",
    alt: "preview-image",
  },
];

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
</script>

<template>
  <section>
    <div class="container-lg">
      <!-- path navigation -->
      <div class="path d-flex align-items-center gap-2">
        <router-link style="color: hsla(0, 0%, 0%, 0.6) !important" to="/"
          >Home
        </router-link>
        <img src="../assets/icons/next-arrow.svg" alt="next-arrow-image" />
        <router-link style="color: hsla(0, 0%, 0%, 0.6) !important" to="#"
          >Shop
        </router-link>
        <img src="../assets/icons/next-arrow.svg" alt="next-arrow-image" />
        <router-link style="color: hsla(0, 0%, 0%, 0.6) !important" to="#"
          >Men
        </router-link>
        <img src="../assets/icons/next-arrow.svg" alt="next-arrow-image" />
        <router-link class="text-black" to="#">T-shirts</router-link>
      </div>

      <!-- Product main info -->
      <div
        class="pb-5 pt-3 d-flex gap-2 flex-wrap justify-content-between mw-100"
      >
        <!-- Preview product -->
        <div
          class="preview-product d-flex flex-md-row flex-column-reverse justify-content-center align-items-center"
        >
          <!-- Preview images -->
          <div class="sub-images flex-md-column flex-row">
            <div
              class="image-container"
              :class="{ active: activeImg === image.id }"
              v-for="image in images"
              :key="image.id"
            >
              <img
                @click="toggleCurrentImg(image.id, image.src)"
                :src="image.src"
                :alt="image.alt"
              />
            </div>
          </div>

          <!-- Current image -->
          <div class="preview-image">
            <img :src="currentImgUrl" alt="current-previewed-image" />
          </div>
        </div>

        <!-- Product details -->
        <div class="product-details">
          <h1 class="mb-2">One Life Graphic T-shirt</h1>

          <!-- Rating -->
          <div
            class="rating-wrapper position-relative w-100 d-flex align-items-center mb-2"
          >
            <div
              class="d-flex align-items-center gap-2 position-absolute left-0"
              style="scale: 1.4; transform: translateX(20px)"
            >
              <Rating
                v-model="rating"
                class="rating gap-1"
                style="color: #ffc633"
                readonly
              />
              <p class="ms-2 mb-0" style="color: #666666; font-size: 14px">
                <span class="text-black">{{ rating.toFixed(1) }}</span
                >/5
              </p>
            </div>
          </div>

          <!-- Price -->
          <div class="price-wrapper d-flex align-items-center gap-3 mb-2">
            <p style="font-size: 32px; font-weight: 500">$<span>260</span></p>
            <p
              v-if="discountAvailable"
              class="old-price"
              style="
                font-size: 32px;
                font-weight: 700;
                color: hsla(0, 0%, 0%, 0.4);
                text-decoration: line-through;
              "
            >
              $<span>300</span>
            </p>
            <span v-if="discountAvailable" class="discount">-40%</span>
          </div>

          <!-- description -->
          <p
            class="mb-3 pb-4"
            style="
              color: hsla(0, 0%, 0%, 0.6);
              border-bottom: 1px solid hsla(0, 0%, 0%, 0.1);
            "
          >
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>

          <!-- Colors -->
          <div
            class="colors-wrapper pb-4 mb-3"
            style="border-bottom: 1px solid hsla(0, 0%, 0%, 0.1)"
          >
            <p
              class="mb-2"
              style="font-size: 16px; color: hsla(0, 0%, 0%, 0.6)"
            >
              Select Colors
            </p>
            <div class="d-flex gap-4">
              <span
                @click="activeColor = 0"
                :class="{ active: activeColor === 0 }"
                class="color-circle"
                style="background: #4f4631"
              >
                <img src="@/assets/icons/check-sign.svg" alt="check-sign" />
              </span>
              <span
                @click="activeColor = 1"
                :class="{ active: activeColor === 1 }"
                class="color-circle"
                style="background: #314f4a"
              >
                <img src="@/assets/icons/check-sign.svg" alt="check-sign" />
              </span>
              <span
                @click="activeColor = 2"
                :class="{ active: activeColor === 2 }"
                class="color-circle"
                style="background: #31344f"
              >
                <img src="@/assets/icons/check-sign.svg" alt="check-sign" />
              </span>
            </div>
          </div>

          <!-- Size -->
          <div
            class="colors-wrapper pb-4 mb-3"
            style="border-bottom: 1px solid hsla(0, 0%, 0%, 0.1)"
          >
            <p
              class="mb-2"
              style="font-size: 16px; color: hsla(0, 0%, 0%, 0.6)"
            >
              Choose Size
            </p>
            <div class="d-flex gap-2">
              <span
                @click="activeSize = 0"
                :class="{ active: activeSize === 0 }"
                class="size-oval"
              >
                Small
              </span>
              <span
                @click="activeSize = 1"
                :class="{ active: activeSize === 1 }"
                class="size-oval"
              >
                Medium
              </span>
              <span
                @click="activeSize = 2"
                :class="{ active: activeSize === 2 }"
                class="size-oval"
              >
                Large
              </span>
              <span
                @click="activeSize = 3"
                :class="{ active: activeSize === 3 }"
                class="size-oval"
              >
                X-Large
              </span>
            </div>
          </div>

          <!-- Quantity & Add to cart -->
          <div class="d-flex align-items-center gap-3 pt-3">
            <!-- control quantity -->
            <div
              class="quantity d-flex gap-4 align-items-center justify-content-center px-5"
              style="background: #f0f0f0; border-radius: 62px"
            >
              <img
                @click="--itemAmount"
                class="change-quantity-btn"
                src="@/assets/icons/minus.svg"
                alt="minus-sing"
              />
              <span class="fs-5">{{ itemAmount }}</span>
              <img
                @click="itemAmount++"
                class="change-quantity-btn"
                src="@/assets/icons/plus.svg"
                alt="plus-sing"
              />
            </div>

            <!-- Add to cart -->
            <button
              class="btn add-to-cart-btn bg-black text-white rounded-pill w-100 py-2 px-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <!-- Extra Info -->
      <ExtraProductInfo />

      <!-- Suggested Products -->
      <SuggestProducts />
    </div>
  </section>
</template>

<style scoped>
section .path {
  border-top: 1px solid hsla(0, 0%, 0%, 0.1);
  padding: 15px 0px;
}

a {
  text-decoration: none;
}

.preview-product {
  width: 49%;
  gap: 15px;
}

.product-details {
  width: 50%;
  max-height: fit-content;
}

.preview-product,
.product-details {
  border-radius: 20px;
  min-width: 360px;
  padding: 20px;
}

@media (max-width: 1200px) {
  .preview-product,
  .product-details {
    width: 100% !important;
  }

  .preview-product {
    padding: 4px 10px;
    /* flex-direction: column !important; */
  }

  .product-details {
    padding: 5px;
  }
}

.sub-images {
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  width: 152px;
}

.preview-image {
  width: 444px;
  height: 530px;
  border-radius: 20px;
  overflow: hidden;
}

.preview-image,
.image-container {
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-container {
  width: 100%;
  height: 168px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
}
.image-container.active {
  border-color: hsla(0, 0%, 0%, 1);
}

img {
  max-width: 100%;
}
.product-details h1 {
  font-size: 40px;
  text-align: left;
  text-transform: uppercase;
  font-weight: 900;
}
@media (max-width: 767px) {
  .sub-images,
  .preview-image {
    width: 100%;
  }

  .sub-images {
    justify-content: space-between;
  }

  .preview-image {
    max-height: 358px;
  }

  .sub-images img,
  .preview-image img {
    width: 100%;
  }
  .image-container {
    max-height: 106px;
    max-width: 111px;
  }
  .product-details h1 {
    font-size: 24px;
    width: 260px;
    padding: 0 5px;
  }
}

.rating-wrapper {
  min-height: 30px;
}

.discount {
  width: Fixed (58px) px;
  height: Hug (28px) px;
  top: 2219px;
  left: 231px;
  padding: 6px 14px 6px 14px;
  gap: 12px;
  border-radius: 62px;
  opacity: 0px;
  background: hsla(0, 100%, 60%, 0.1);
  color: #ff3333;
}

.color-circle {
  width: 37px;
  height: 37px;
  border-radius: 50%;
  border: 1px solid hsla(0, 0%, 0%, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.color-circle.active img {
  display: block;
}

.color-circle img {
  display: none;
}

.size-oval {
  border-radius: 62px;
  padding: 12px 25px;
  cursor: pointer;
  background: #f0f0f0;
  color: hsla(0, 0%, 0%, 0.6);
  font-size: 15px;
  transition: all 0.3s ease-in-out;
}

.size-oval.active {
  background: #000000;
  color: hsla(0, 0%, 100%, 1);
}

.apply-btn {
  min-width: 119px;
  max-width: 119px;
}
.checkout-btn {
  width: 100% !important;
  font-size: 15px;
}

.checkout-btn img {
  width: 16px;
}

.apply-btn,
.checkout-btn {
  height: 48px;
  border-radius: 62px;
  padding: 4px 10px;
}

.quantity {
  height: 52px;
  max-width: 170px;
}

.value {
  color: hsla(0, 0%, 0%, 0.6);
}

.change-quantity-btn {
  cursor: pointer;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding: 5px;
  transition: all 0.35s ease;
}

.change-quantity-btn:hover {
  background: #d0d0d0;
}

.add-to-cart-btn {
  height: 52px;
}

@media (max-width: 767px) {
  .size-oval {
    padding: 8px 16px;
    font-size: 14px;
  }
}
</style>
