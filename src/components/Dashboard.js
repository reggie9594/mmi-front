import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Dashboard = () => {
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
                {/* <!-- Top Statistics --> */}
                <div class="row">
                  <div class="col-xl-4 col-sm-6">
                    <div class="card card-mini mb-4">
                      <div class="card-body">
                        <h2 class="mb-1">71,503</h2>
                        <p>Sales</p>
                        <div class="chartjs-wrapper">
                          {/* <canvas id="barChart"></canvas> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-sm-6">
                    <div class="card card-mini  mb-4">
                      <div class="card-body">
                        <h2 class="mb-1">9,503</h2>
                        <p>Customers</p>
                        <div class="chartjs-wrapper">
                          {/* <canvas id="dual-line"></canvas> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-sm-6">
                    <div class="card card-mini mb-4">
                      <div class="card-body">
                        <h2 class="mb-1">71,503</h2>
                        <p>Orders</p>
                        <div class="chartjs-wrapper">
                          {/* <canvas id="area-chart"></canvas> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-xl-12">
                    {/* <!-- Top Products --> */}
                    <div class="card card-default" data-scroll-height="580">
                      <div class="card-header justify-content-between mb-4">
                        <h2>Top Products</h2>
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

export default Dashboard;
