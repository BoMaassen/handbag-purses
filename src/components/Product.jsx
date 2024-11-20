function Product({label, productImg, productName, productPrice}) {
    return (
        <article>
            <span>{label}</span>
            <img src={productImg} alt={productName}/>
            <p>{productName}</p>
            <h4>€{productPrice},-</h4>
        </article>
    );
}

export default Product;