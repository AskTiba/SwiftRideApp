import React from "react";
import { View, Text } from "react-native";

const BottomSheetHeader = ({ title }: { title: string }) => {
  return (
    <View className="items-center justify-center border-b-[1px] p-1 border-b-[#f0f0f0]">
      <Text className="text-[17px] text-[#242424] py-2 font-[600] leading-[22px] tracking-[-0.43px]">
        {title}
      </Text>
    </View>
  );
};

export default BottomSheetHeader;