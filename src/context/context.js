import React, { Component } from "react";
import { linkData } from "./linkData";
import { socialData } from "./socialData";
import { items } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0,
    links: linkData,
    socialLinks: socialData,
    cart: [],
    data: items,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    // storeProducts: [],
    filtredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: false
  };
  componentDidMount() {
    this.setProducts(items);
  }
  setProducts = () => {
    let featuredProducts = this.state.data.filter(item => item.featured);
    this.setState({
      filtredProducts: this.state.data,
      featuredProducts,
      cart: this.getStorageCart(),
      singleProduct: this.getStorageProduct(),
      loading: false
    });
  };
  // GET CART FROM LOCAL STORAGE
  getStorageCart = () => {
    return [];
  };
  // GET PRODUCT FROM LOCAL STORAGE
  getStorageProduct = () => {
    return [];
  };
  // GET TOTALS
  getTotals = () => {};
  // ADD TOTALS
  addTotals = () => {};
  // SYNC LOCAL STORAGE
  syncStorage = () => {};
  //ADD CART
  addToCart = id => {
    console.log(`add to cart ${id}`);
  };
  // SET SINGLE PRODUCT
  setSingleProduct = id => {
    console.log(`add single ${id}`);
  };
  //SIDEBAR
  handleSidebar = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    });
  };

  //CARTOPEN
  handleCartOpen = () => {
    this.setState({
      cartOpen: !this.state.cartOpen
    });
  };
  // CLOSE CART
  closeCart = () => {
    this.setState({ cartOpen: false });
  };
  // OPEN CART
  openCart = () => {
    this.setState({ cartOpen: true });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCartOpen: this.handleCartOpen,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
