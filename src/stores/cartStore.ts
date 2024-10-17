import { defineStore } from "pinia";
import { ref } from "vue";
import type { Product } from "@/Interfaces/Product";
import type { CartProduct } from "@/Interfaces/CartProduct";

interface Cart {
  cart: CartProduct[];
  cartTotalPrice: number;
  cartItemsNum: number;
}

const saveToLocalStorage = (cart: Cart): void => {
  localStorage.setItem(
    "shop.co-cart",
    JSON.stringify({
      products: cart.products,
      cartTotalPrice: cart.cartTotalPrice,
      cartItemsNum: cart.cartItemsNum,
    })
  );
};
const fetchDataFromLocalStorage = (): Cart => {
  return (
    JSON.parse(localStorage.getItem("shop.co-cart")) || {
      products: [],
      cartTotalPrice: 0,
      cartItemsNum: 0,
    }
  );
};

export const useCartStore = defineStore("cart", () => {
  const cart = ref<Cart>({
    products: [],
    cartTotalPrice: 0,
    cartItemsNum: 0,
  });
  const isLoading = ref(false);

  const getCart = (): void => {
    isLoading.value = true;
    cart.value = fetchDataFromLocalStorage();
    isLoading.value = false;
  };

  const addToCart = (product: Product, quantity: number = 1): void => {
    cart.value = fetchDataFromLocalStorage();

    const currentProducts = cart.value.products;

    const addedProduct = {
      ...product,
      quantity: quantity,
      total: product.price * quantity,
    };

    if (cart.value.length === 0) {
      currentProducts.push(addedProduct);
    } else {
      const productIndex = currentProducts.findIndex(
        (item) => item.id === product.id
      );

      if (productIndex === -1) {
        currentProducts.push(addedProduct);
      } else {
        currentProducts[productIndex].quantity += quantity;
        currentProducts[productIndex].total += product.price * quantity;
      }
    }

    cart.value.cartItemsNum += quantity;
    cart.value.cartTotalPrice += product.price * quantity;

    saveToLocalStorage({ ...cart.value, products: currentProducts });
  };

  const deleteFromCart = (targetId: number): void => {
    isLoading.value = true;
    cart.value = fetchDataFromLocalStorage();

    const targetProduct = cart.value.products.find(
      (item) => item.id === targetId
    );

    cart.value.products = cart.value.products.filter(
      (item) => item.id !== targetId
    );
    cart.value.cartItemsNum -= targetProduct.quantity;
    cart.value.cartTotalPrice -= targetProduct.total;

    if (cart.value.products.length === 0) {
      cart.value = {
        products: [],
        cartTotalPrice: 0,
        cartItemsNum: 0,
      };
    }

    saveToLocalStorage(cart.value);
    isLoading.value = false;
  };

  const increaseQuantity = (targetId: number): void => {
    cart.value = fetchDataFromLocalStorage();
    const productIndex = cart.value.products.findIndex(
      (item) => item.id === targetId
    );
    cart.value.products[productIndex].quantity += 1;
    cart.value.products[productIndex].total +=
      cart.value.products[productIndex].price;
    cart.value.cartTotalPrice += cart.value.products[productIndex].price;
    saveToLocalStorage(cart.value);
  };

  const decreaseQuantity = (targetId: number): void => {
    cart.value = fetchDataFromLocalStorage();
    const productIndex = cart.value.products.findIndex(
      (item) => item.id === targetId
    );

    if (cart.value.products[productIndex].quantity === 1) {
      deleteFromCart(targetId);
    } else {
      cart.value.products[productIndex].quantity -= 1;
      cart.value.products[productIndex].total -=
        cart.value.products[productIndex].price;
      cart.value.cartTotalPrice -= cart.value.products[productIndex].price;

      saveToLocalStorage(cart.value);
    }
  };

  return {
    isLoading,
    cart,
    getCart,
    addToCart,
    deleteFromCart,
    increaseQuantity,
    decreaseQuantity,
  };
});
