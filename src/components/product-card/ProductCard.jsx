const ProductCard = ({ product }) => {
  const { image, title, brand, price, size } = product;
  return (
    <div className="max-w-xs">
      <div>
        <img className="w-full" src={image} alt={title} />
      </div>
      <div>
        <div className="text-neutral-500 font-medium">{brand}</div>
        <div className="w-[20rem] whitespace-nowrap overflow-hidden text-ellipsis">{title}</div>
        <div className="font-bold">₹ {price}</div>
        <div>
          <span className="text-neutral-500">Size</span> {size}
        </div>
      </div>
    </div>
  );
};
export { ProductCard };
