import React from 'react';
import { TouchableOpacity } from 'react-native';
import Checkmark from '~/assets/svgs/checkmark';

interface CheckboxProps {
  checked: boolean;
  onValueChange: (checked: boolean) => void;
  className?: string;
  checkmarkColor?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onValueChange,
  className,
  checkmarkColor = '#ffffff',
}) => {
  const handlePress = () => {
    onValueChange(!checked);
  };

  return (
    <TouchableOpacity
      className={`h-6 w-6 items-center justify-center rounded-full border-2 border-gray-300 bg-[#19363e] ${className}`}
      onPress={handlePress}>
      {checked && <Checkmark width={12} height={12} stroke={'#fdd700'} />}
    </TouchableOpacity>
  );
};

export default Checkbox;
