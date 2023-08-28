import {
  CheckBoxIcon,
  CheckBoxOutlineBlankIcon,
} from 'components/atoms/IconButton';
import Text from 'components/atoms/Text';
import Flex from 'components/layout/Flex';
import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// defaultValue 제외하고 상속
type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'defaultValue'
> & {
  label?: string;
};

const CheckBoxElement = styled.input`
  display: none;
`;

const Label = styled.label`
  cursor: pointer;
  margin-left: 6px;
  user-select: none;
`;

const CheckBox = (props: CheckBoxProps) => {
  const { id, label, onChange, checked, ...restProps } = props;

  // 체크상태
  const [isChecked, setIsChecked] = useState(checked);
  const ref = useRef<HTMLInputElement>(null);

  const onClick = useCallback(
    (e: any) => {
      e.preventDefault();
      ref.current?.click();
      setIsChecked((isChecked) => !isChecked);
    },
    [ref, setIsChecked],
  );

  useEffect(() => {
    setIsChecked(checked ?? false);
  }, [checked]);

  return (
    <>
      <CheckBoxElement
        {...restProps}
        ref={ref}
        type="checkbox"
        checked={checked}
        readOnly={!onChange} // change 핸들러가 없으면 비활성화
        onChange={onChange}
      />
      <Flex>
        {checked ?? isChecked ? (
          <CheckBoxIcon size={20} onClick={onClick} />
        ) : (
          <CheckBoxOutlineBlankIcon size={20} onClick={onClick} />
        )}
        {label && label.length > 0 && (
          <Label htmlFor={id} onClick={onClick}>
            <Text>{label}</Text>
          </Label>
        )}
      </Flex>
    </>
  );
};

export default CheckBox;
