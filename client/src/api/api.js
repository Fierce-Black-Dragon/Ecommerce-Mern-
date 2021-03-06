import axios from "axios";

const API = axios.create({
  baseURL: "https://dragon-mern-ecomm1.herokuapp.com/",
  // baseURL: "http://localhost:5000",
});

API.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("profile")) {
      config.headers.authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).token
      }`;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }

  // return req;"
);
//home  page
export const fetchProducts = () => API.get("/product");
export const fetchProduct = (id) => API.get(`/product/${id}`);
//user sign up /login
export const loginIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
//user
export const myadress = () => API.get("/user/address");
export const addtoCart = (id) => API.get(`/product/${id}/addCart`);
export const removetoCart = (id) => API.get(`/product/${id}/removeCart`);
export const getuserCart = () => API.get("/cart");
export const placOrder = (formData) => API.post("order", formData);
export const myOrderList = () => API.get("/user/myOrder");
export const myBillList = () => API.get("/user/myBills");
export const updatemyOrderById = (id) => API.get(`/user/myOrder/${id}`);
export const reviewProductById = (id, updatedProduct) =>
  API.post(`/product/${id}/reviews`, updatedProduct);
//admin or seller
export const fetchMyProducts = () => API.get("/user/MyProducts");
export const createP = (newProduct) => API.post("/product", newProduct);
export const updateProduct = (id, updatedProduct) =>
  API.patch(`/product/${id}`, updatedProduct);
export const deleteProduct = (id) => API.delete(`/product/${id}`);
export const sellerOrderById = (id) => API.get(`/user/sellerOrderById/${id}`);
export const updateSellerOrderById = (id) =>
  API.patch(`/user/sellerOrderById/${id}`);

export const sellerOrderList = () => API.get("/user/sellerOrders");
//admin
export const allsellers = () => API.get("/user/allseller");
export const allusers = () => API.get("/user/allusers");
export const promoteSellerById = (id) => API.get(`/user/allseller/${id}`);
export const deleteUserById = (id) => API.delete(`/user/${id}`);
// /:id/reviews
