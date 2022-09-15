const Product = ({ image, productInfo }: any) => (
  <div className="product">
    <img src={`${process.env.PUBLIC_URL}/${image}`} alt={productInfo.props.title} />
    {productInfo}
  </div>
);

const ProductInfo = ({ title, description }: any) => (
  <div className="productInfo">
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
);

function ThirdScreen() {
  return (
    <div className="thirdScreen">
      <div className="contentWrapper">
        <h1>About Us</h1>
        <p>Allow us to tell you a short story...</p>
      </div>
      <div className="productsWrapper">
        <div className="column1">
          <Product
            image="images/pexels-max-vakhtbovych-1x.jpg"
            productInfo={
              <ProductInfo
                title="Chapter I"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"
              />
            }
          />
          <Product
            image="images/pexels-houzlook-com-1x.jpg"
            productInfo={
              <ProductInfo
                title="Chapter III"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"
              />
            }
          />
        </div>
        <div className="column2">
          <Product
            image="images/pexels-max-vakhtbovych-2-1x.jpg"
            productInfo={
              <ProductInfo
                title="Chapter II"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"
              />
            }
          />
          <Product
            image="images/pexels-oleg-zaicev-1x.jpg"
            productInfo={
              <ProductInfo
                title="Chapter IV"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"
              />
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ThirdScreen;
