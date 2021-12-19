import { Product } from '../models/product.model'

export enum ProductsActionsTypes {
  GET_ALL_PRODUCTS = '[Product] Get All products',
  GET_SELECTED_PRODUCTS = '[Product] Get Selected products',
  GET_AVAILABLE_PRODUCTS = '[Product] Get Available products',
  SEARCH_PRODUCTS = '[Product] Search products',
  NEW_PRODUCT = '[Product] New product',
  SELECT_PRODUCT = '[Product] Select product',
  EDIT_PRODUCT = '[Product] Edit product',
  DELETE_PRODUCT = '[Product] Delete product',
  PRODUCT_ADDED = '[Product] product added',
  PRODUCT_UPDATED = '[Product] product updated',
}

export interface ActionEvent {
  type: ProductsActionsTypes
  payload?: any
}

export enum DataStateEnum {
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
}

export interface AppDataState<T> {
  dataState: DataStateEnum
  data?: T
  errorMessage?: string
}
