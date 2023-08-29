import CartProduct from 'components/organisms/CartProduct';
import { useGlobalSpinnerActionsContext } from 'contexts/GlobalSpinnerContext';
import {
  useShoppingCartActionsContext,
  useShoppingCartContext,
} from 'contexts/ShoppingCartContext';
import purchase from 'services/purchases';

const CartContainer = () => {
  const { setGlobalSpinner } = useGlobalSpinnerActionsContext();
  const { cart } = useShoppingCartContext();
  const { removeProductFromCart } = useShoppingCartActionsContext();

  // 삭제 버튼 클릭 시, 상품을 삭제
  const handleRemoveButtonClick = (id: number) => {
    removeProductFromCart(id);
  };

  // 구입 버튼 클릭 시, 상품을 구입
  const handleBuyButtonClick = async (id: number) => {
    try {
      setGlobalSpinner(true);
      await purchase({ productId: id });
      window.alert('구입했습니다');

      // 상품 구입 후 카드에서 제거
      removeProductFromCart(id);
    } catch (err: unknown) {
      if (err instanceof Error) {
        window.alert(err.message);
      }
    } finally {
      setGlobalSpinner(false);
    }
  };

  return (
    <>
      {cart.map((p) => (
        <CartProduct
          key={p.id}
          id={p.id}
          imageUrl={p.imageUrl}
          title={p.title}
          price={p.price}
          onRemoveButtonClick={handleRemoveButtonClick}
          onBuyButtonClick={handleBuyButtonClick}
        />
      ))}
    </>
  );
};

export default CartContainer;
