import Image, { ImageProps } from 'next/image';
import styled from 'styled-components';

type ImageShape = 'circle' | 'square';

// next image props 상속
type ShapeImageProps = ImageProps & { shape?: ImageShape };

// 일반 img 태그가 아닌 next js Image Component
const ImageWithShape = styled(Image)<{ shape?: ImageShape }>`
  border-radius: ${({ shape }) => (shape === 'circle' ? '50%' : '0')};
`;

const ShapeImage = (props: ShapeImageProps) => {
  const { shape, ...imageProps } = props;

  return <ImageWithShape shape={shape} {...imageProps} />;
};

export default ShapeImage;
