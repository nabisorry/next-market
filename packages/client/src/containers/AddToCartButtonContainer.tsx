import Button from 'components/atoms/Button';
import {
  useShoppingCartActionsContext,
  useShoppingCartContext,
} from 'contexts/ShoppingCartContext';
import type { Product } from '@types';

type AddToCartButtonContainerProps = {
  product: Product;
  onAddToCartButtonClick?: (product: Product) => void;
};

const AddToCartButtonContainer = ({
  product,
  onAddToCartButtonClick,
}: AddToCartButtonContainerProps) => {
  const { cart } = useShoppingCartContext();
  const { addProductToCart } = useShoppingCartActionsContext();
  const handleAddToCartButtonClick = () => {
    const productId = Number(product.id);
    const result = cart.findIndex((v) => v.id === productId);

    // 같은 상품이 카트에 없으면 카트에 추가한다
    if (result === -1) {
      addProductToCart(product);
    }

    onAddToCartButtonClick && onAddToCartButtonClick(product);
  };

  return (
    <Button
      width={{ base: '100%', md: '400px' }}
      height="66px"
      onClick={handleAddToCartButtonClick}
    >
      카트에 추가
    </Button>
  );
};

export default AddToCartButtonContainer;
