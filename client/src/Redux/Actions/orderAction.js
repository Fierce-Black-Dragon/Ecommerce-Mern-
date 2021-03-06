import {
  SUCESS_FULLY,
  END_LOADING,
  SELLERORDERS,
  SELLERORDERBYID,
  START_LOADING,
} from "../../constants/ActionTypes";
import * as api from "../../api/api.js";

export const placeOrderFnc = (result, router) => async (dispatch) => {
  try {
    const { data } = await api.placOrder(result);

    dispatch({ type: SUCESS_FULLY });
  } catch (error) {
    alert(error);
  }
};
export const myOrders = () => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("profile"));

    if (user?.user) {
      dispatch({ type: START_LOADING });
      const { data } = await api.myOrderList();

      dispatch({ type: SELLERORDERS, payload: { data } });
      dispatch({ type: END_LOADING });
    }
    //
  } catch (error) {
    alert(error);
  }
};
export const myBills = () => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("profile"));

    if (user?.user) {
      dispatch({ type: START_LOADING });
      const { data } = await api.myBillList();

      dispatch({ type: SELLERORDERS, payload: { data } });
      dispatch({ type: END_LOADING });
    }
    //
  } catch (error) {
    alert(error);
  }
};
export const fetchsellerOrders = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.sellerOrderList();

    dispatch({ type: SELLERORDERS, payload: { data } });
    dispatch({ type: END_LOADING });
    //
  } catch (error) {
    alert(error);
  }
};
export const fetchsellerOrderById = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.sellerOrderById(id);

    dispatch({ type: SELLERORDERBYID, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    alert(error);
  }
};
export const updatellerOrderById = (id, router) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    router.push("/admin");
    const { data } = await api.updateSellerOrderById(id);
    console.log(data);
    router.push("/admin/orders");
  } catch (error) {
    alert(error);
  }
};
export const fd = (id, router) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.updatemyOrderById(id);
    router.push("/");
    router.push("/myOrder");
  } catch (error) {
    alert(error);
  }
};
