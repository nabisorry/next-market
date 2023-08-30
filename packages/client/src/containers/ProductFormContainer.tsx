import ProductForm, { ProductFormData } from 'components/organisms/ProductForm';
import { useAuthContext } from 'contexts/AuthContext';
import { useGlobalSpinnerActionsContext } from 'contexts/GlobalSpinnerContext';
import { addProduct } from 'services/products';
import { Product } from '@types';

type ProductFormContainerProps = {
  onSave?: (error?: Error, product?: Product) => void;
};

const ProductFormContainer = ({ onSave }: ProductFormContainerProps) => {
  const { authUser } = useAuthContext();
  const { setGlobalSpinner } = useGlobalSpinnerActionsContext();
  // 게시 버튼을 눌렀을 때
  const handleSave = async (data: ProductFormData) => {
    if (!authUser) return;

    const product = {
      image: data.image,
      title: data.title,
      description: data.description,
      category: data.category,
      condition: data.condition,
      price: Number(data.price),
      imageUrl: '/products/shoes/feet-1840619_1920.jpeg', // 더미 이미지
      blurDataUrl: '',
      owner: authUser,
    };

    try {
      setGlobalSpinner(true);
      // 제품 API로 상품을 추가한다
      const ret = await addProduct({ product });
      onSave && onSave(undefined, ret);
    } catch (err: unknown) {
      if (err instanceof Error) {
        window.alert(err.message);
        onSave && onSave(err);
      }
    } finally {
      setGlobalSpinner(false);
    }
  };

  return <ProductForm onProductSave={handleSave} />;
};

export default ProductFormContainer;
