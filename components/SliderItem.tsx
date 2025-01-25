import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { CarouselDataType } from '~/data/CarouselData';

type Props = {
  index: number;
  item: CarouselDataType;
};

const { width } = Dimensions.get('screen');

export default function SliderItem({ index, item }: Props) {
  return (
    <View style={{ width: width }} className="px-8">
      <View className="items-center ">{item.Image}</View>
      <View className="">
        <Text className="text-medium mb-2 mt-5">{item.Title}</Text>
        <Text className="text-tx">{item.Description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
