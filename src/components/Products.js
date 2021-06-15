const Products = (props) => {
    return (
        <div className="products-wrapper">
            <img src={props.product.img} alt="" />
            <p>{props.product.name}</p>
            <p>{props.product.price}</p>
            <span>{props.product.description}</span>
        </div>
    );
}

export default Products;