import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch("https://music-make-it-api.herokuapp.com/products/products")
      .then(res => res.json())
      .then(
        (data)=>{
          setIsLoaded(true);
          setProducts(data);
        },
        (error)=>{
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  if (error) {
    return <div>Error: {error.message}</div>;
  }else if(!isLoaded){
    return <div>Loading...</div>;
  }
  else{
      return (
        <div>
          <div class="mobile-sticky-body-overlay"></div>

          <div class="wrapper">
            <Sidebar />

            <div class="page-wrapper">
              <Header />
              <div class="content-wrapper">
                <div class="content">
                  <div class="row">
                    <div class="col-xl-12">
                      {/* <!-- Top Products --> */}
                      <div class="card card-default" data-scroll-height="580">
                        <div class="card-header justify-content-between mb-4">
                          <h2>Products</h2>
                          <div>
                            <button class="text-black-50 mr-2 font-size-20">
                              <i class="mdi mdi-cached"></i>
                            </button>
                          </div>
                        </div>
                        <div class="card-body py-0">
                          {products.map(product=>(
                            <div class="media d-flex mb-5">
                              <div class="media-image align-self-center mr-3 rounded">
                                <a href="/#">
                                  <img
                                    src="assets/img/products/product.jpg"
                                    alt="customer item"
                                  />
                                </a>
                              </div>
                              <div class="media-body align-self-center">
                                <a href="/#">
                                  <h6 class="mb-3 text-dark font-weight-medium">
                                    {" "}
                                    {product.description}
                                  </h6>
                                </a>
                                <p class="float-md-right">
                                  <span class="text-dark mr-2">{product.quantity}</span>Available
                                </p>
                                <p class="mb-0">
                                  <span class="text-dark ml-3">${product.price}</span>
                                </p>
                              </div>
                            </div>
                          ))}
                          


                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      );
  }

};

export default Home;
