const Product = ({ image, productInfo }: any) => (
  <div className="product">
    <img src={`${process.env.PUBLIC_URL}/${image}`} alt={productInfo.props.title} />
    {productInfo}
  </div>
);

const ProductInfo = ({ title, price, size }: any) => (
  <div className="productInfo">
    <p className="title">{title}</p>
    <p className="price">{price}</p>
    <p className="size">{size}</p>
    <p className="book">Book!</p>
  </div>
);

function SecondScreen() {
  return (
    <div className="secondScreen">
      <div className="contentWrapper">
        <h1>Explore</h1>
        <p>
          {`From one-guest rooms to 
            penthouses with pools and gardens`}
        </p>
      </div>
      <div className="productsWrapper">
        <Product
          image="images/pexels-dmitry-zvolskiy-1x.jpg"
          productInfo={<ProductInfo title="Room with one king-size bed" price="$35" size="28m2" />}
        />
        <Product
          image="images/pexels-naim-benjelloun-1x.jpg"
          productInfo={<ProductInfo title="Penthouse for 8 person" price="$2039" size="4038m2" />}
        />
      </div>
    </div>
  );
}

export default SecondScreen;
