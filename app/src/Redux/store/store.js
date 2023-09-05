import { configureStore } from "@reduxjs/toolkit";
import registrationDataReducer from "../reducer/reducer";
import sliceviewReducer from "../reducer/sliceapicard";
import registerDataReducer from "../reducer/registerReducer";
import loginDataReducer from "../reducer/loginReducer";
import ProductDetailReducer from "../reducer/productDetailSlice";
import getProductActionReducer from "../reducer/getProductReducer";
import PostProductDataReducer from "../reducer/adminPostProductReducer";
import GetAdminProductListDataReducer from "../reducer/getProductAdminListReducer";
import FilterDataByCategoryReducer from "../reducer/getCategoryReducer";
import deleteProductReducer from "../reducer/deleteProductReducer";
import updateProductReducer from "../reducer/updateProductReducer";
import ProductsubcategoryReducer from "../reducer/subcategoryslice"
import searchProductReducer from "../reducer/searchProductReducer";
import cartinfouserReducer from "../reducer/usercartslice"

export const store = configureStore({
  reducer: {
    register: registrationDataReducer,
    slicedetails: sliceviewReducer,
    registerdetail: registerDataReducer,
    logindatacheck: loginDataReducer,
    productdetaildata: ProductDetailReducer,
    getproductdata: getProductActionReducer,
    postproductAdmindata: PostProductDataReducer,
    GetAdminProductAllListData: GetAdminProductListDataReducer,
    filtercategoryData: FilterDataByCategoryReducer,
    deleteProduct: deleteProductReducer,
    updateProductData: updateProductReducer,
    homesubcategoryapi:ProductsubcategoryReducer,
    Searchproduct: searchProductReducer,
    cartdetails: cartinfouserReducer,
  },
});
