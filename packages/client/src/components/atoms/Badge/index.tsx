import styled from 'styled-components';

const BadgeWrapper = styled.div<{ backgroundColor: string }>`
  border-radius: 20px;
  height: 20px;
  min-width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const BadgeText = styled.p`
  color: white;
  font-size: 11px;
  user-select: none;
`;

type BadgeProps = {
  content: string;
  backgroundColor: string;
};

// TODO 뱃지 사이즈 만들기 s, m, l 및 storybook 수정
const Badge = ({ content, backgroundColor }: BadgeProps) => {
  return (
    <BadgeWrapper backgroundColor={backgroundColor}>
      <BadgeText>{content}</BadgeText>
    </BadgeWrapper>
  );
};

export default Badge;
