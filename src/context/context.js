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
    filtredProducts: [],
    featuredProducts: [],
    bestsellerProducts: [],
    brandNewProducts: [],
    singleProduct: {},
    loading: true,
    currentPage: 0,
    currentProducts: [0, 6],
    pageSize: 6,
    pagesCount: Math.ceil(items.length / 6),
    summary: true,
    text: "",
    discountCode: "kodilla",
    discount: 0.15,
    search: "",
    price: 0,
    min: 0,
    max: 0,
    company: "all",
    shipping: false
  };

  //PAGINATION
  handlePagination = (e, index) => {
    e.preventDefault();
    this.setState({
      currentPage: index,
      currentProducts: [
        index * this.state.pageSize,
        (index + 1) * this.state.pageSize
      ]
    });
  };
  //*********SORTING FUNCTIONALITY***************

  //sort by A to Z

  sortByNameAtoZ = () => {
    let data = [...this.state.data];
    this.setState({
      filtredProducts: data.sort((a, b) => a.company.localeCompare(b.company))
    });
  };
  // sort by Z to A

  sortByNameZtoA = () => {
    let data = [...this.state.data];
    this.setState({
      filtredProducts: data.sort((a, b) => b.company.localeCompare(a.company))
    });
  };

  //sort low to high

  sortAscendingPrice = () => {
    let data = [...this.state.data];
    this.setState({
      filtredProducts: data.sort((a, b) => a.price - b.price)
    });
  };
  //sort high to low
  sortDescendingPrice = () => {
    let data = [...this.state.data];
    this.setState({
      filtredProducts: data.sort((a, b) => a.price - b.price).reverse()
    });
  };
  // filtering products
  handleChangeFilter = e => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState(
      {
        [name]: value
      },
      this.filterData
    );
  };

  filterData = () => {
    const { data, price, company, shipping, search } = this.state;
    let tempData = [...data];

    //company filtering
    if (company !== "all") {
      tempData = tempData.filter(item => item.company === company);
    }
    // price filtering

    tempData = tempData.filter(item => item.price <= parseFloat(price));

    // search filtering
    if (search.length > 0) {
      tempData = tempData.filter(item =>
        item.title
          .toLowerCase()
          .slice(0, search.length)
          .match(search.toLowerCase())
      );
    }
    // freeShiping filtering
    if (shipping) {
      tempData = tempData.filter(item => item.freeShipping);
    }
    this.setState({
      filtredProducts: tempData
    });
  };

  componentDidMount() {
    this.setProducts(items);
  }
  setProducts = () => {
    let featuredProducts = this.state.data.filter(item => item.featured);
    let bestsellerProducts = this.state.data.filter(item => item.bestseller);
    let brandNewProducts = this.state.data.filter(item => item.brandnew);
    let maxPrice = Math.max(...this.state.data.map(item => item.price));

    this.setState({
      filtredProducts: this.state.data,
      featuredProducts,
      bestsellerProducts,
      brandNewProducts,
      singleProduct: this.getStorageProduct(),
      loading: false,
      max: maxPrice,
      price: maxPrice
    });
  };

  //   GET PRODUCT FROM LOCAL STORAGE
  getStorageProduct = () => {
    return localStorage.getItem("singleProduct")
      ? JSON.parse(localStorage.getItem("singleProduct"))
      : {};
  };

  // GET TOTALS
  getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;
    this.state.cart.forEach(item => {
      subTotal += item.total;
      cartItems += item.count;
    });
    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = subTotal * 0.2;
    tax = parseFloat(tax.toFixed(2));
    let total = subTotal + tax;
    total = parseFloat(total.toFixed(2));

    return {
      cartItems,
      subTotal,
      tax,
      total
    };
  };
  // ADD TOTALS
  addTotals = () => {
    const totals = this.getTotals();
    this.setState({
      cartItems: totals.cartItems,
      cartSubTotal: totals.subTotal,
      cartTax: totals.tax,
      cartTotal: totals.total
    });
  };

  //ADD CART
  addToCart = id => {
    let cart = [...this.state.cart];
    let products = [...this.state.data];
    let item = cart.find(item => item.id === id);
    if (!item) {
      item = products.find(item => item.id === id);
      let total = item.price;
      let cartItem = { ...item, count: 1, total };
      cart = [...cart, cartItem];
    } else {
      item.count++;
      item.total = item.price * item.count;
      item.total = parseFloat(item.total.toFixed(2));
    }
    this.setState(
      () => {
        return { cart: cart };
      },
      () => {
        this.addTotals();
        this.openCart();
      }
    );
  };
  // SET SINGLE PRODUCT
  setSingleProduct = id => {
    let product = this.state.data.find(item => item.id === id);
    localStorage.setItem("singleProduct", JSON.stringify(product));
    this.setState({
      singleProduct: { ...product },
      loading: false
    });
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

  //*****CART COMPONENT FUNCTIONALITY*****

  // CHECKOUT SUMMARY CART
  handleSummary = () => {
    this.setState({
      summary: !this.state.summary,
      cart: [],
      cartItems: 0,
      cartSubTotal: 0,
      cartTotal: 0,
      cartTax: 0,
      text: ""
    });
  };
  // DISCOUNT CART
  handelDiscount = e => {
    this.setState({
      text: e.target.value
    });
  };
  // INCREMENT ITEM
  increment = id => {
    let cart = [...this.state.cart];
    const cartItem = cart.find(item => id === item.id);
    cartItem.count++;
    cartItem.total = cartItem.count * cartItem.price;
    cartItem.total = parseFloat(cartItem.total.toFixed(2));
    this.setState(
      () => {
        return {
          cart: [...cart]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  //DECREMENT ITEM

  decrement = id => {
    let cart = [...this.state.cart];
    const cartItem = cart.find(item => item.id === id);
    cartItem.count = cartItem.count - 1;
    if (cartItem.count === 0) {
      this.removeItem(id);
    } else {
      cartItem.total = cartItem.count * cartItem.price;
      cartItem.total = parseFloat(cartItem.total.toFixed(2));

      this.setState(
        {
          cart: [...cart]
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  //REMOVE ITEM

  removeItem = id => {
    let cart = [...this.state.cart];
    cart = cart.filter(item => item.id !== id);
    this.setState(
      {
        cart: [...cart]
      },
      () => {
        this.addTotals();
      }
    );
  };

  //CLEAR CART

  clearCart = () => {
    this.setState(
      {
        cart: []
      },
      () => {
        this.addTotals();
      }
    );
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
          setSingleProduct: this.setSingleProduct,
          handlePagination: this.handlePagination,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          handleSummary: this.handleSummary,
          handelDiscount: this.handelDiscount,
          sortByNameAtoZ: this.sortByNameAtoZ,
          sortByNameZtoA: this.sortByNameZtoA,
          sortAscendingPrice: this.sortAscendingPrice,
          sortDescendingPrice: this.sortDescendingPrice,
          handleChangeFilter: this.handleChangeFilter
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
