const OrderCards = props => {
    const { totalPrice, totalProducts } = props;

    return (
        <div className="flex justify-between">
            <p>
                <span>01.02.23</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    )
}

export default OrderCards