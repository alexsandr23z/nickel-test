import { TProduct } from "../../types/products";

type TCardProps = {
  product: TProduct;
};

function Card({ product }: TCardProps): React.JSX.Element {
  const {
    id, type, name, previewImg
  } = product;

  return (
    <div key={id}>
      <img
        className="product_card__image"
        src={previewImg}
        width={260}
        height={200}
        alt={name}
      />
      <div className="product_card__info">
        <h2 className="product_card__name">
          {name}
        </h2>
        <p className="product_card__type">{`(${type})`}</p>
      </div>
    </div>
  );
}

export default Card;