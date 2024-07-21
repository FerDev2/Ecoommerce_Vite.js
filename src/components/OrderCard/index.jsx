const OrderCard = props => {
    const { id, title, imageUrl, price, handleDelete } = props;
    let renderClose
    if (handleDelete) {
        renderClose = <div className="cursor-pointer" onClick={() => handleDelete(id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="none" d="M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8" /><path fill="#000000" d="M432 96h-96V72a40 40 0 0 0-40-40h-80a40 40 0 0 0-40 40v24H80a16 16 0 0 0 0 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 0 0 0-32M192.57 416H192a16 16 0 0 1-16-15.43l-8-224a16 16 0 1 1 32-1.14l8 224A16 16 0 0 1 192.57 416M272 400a16 16 0 0 1-32 0V176a16 16 0 0 1 32 0Zm32-304h-96V72a7.91 7.91 0 0 1 8-8h80a7.91 7.91 0 0 1 8 8Zm32 304.57A16 16 0 0 1 320 416h-.58A16 16 0 0 1 304 399.43l8-224a16 16 0 1 1 32 1.14Z" /></svg>
        </div>
    }

    return (
        <div className="flex justify-between items-center gap-10 py-5">
            <div className="flex gap-10 items-center">
                <figure className="w-[150px] h-[150px] flex justify-center items-center ">
                    <img src={imageUrl} alt="" />
                </figure>
                <div>
                    <p className="text-start text-pretty font-bold text-xl">{title}</p>
                    <div>
                        <p className="text-md">S/ {price}</p>
                    </div>
                </div>
            </div>

            {renderClose}
        </div>
    )
}

export default OrderCard