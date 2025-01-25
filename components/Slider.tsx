import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { CarouselDataType, ImageSlider } from '~/data/CarouselData';
import SliderItem from './SliderItem';
import MoveRight from '~/assets/svgs/move_right';
import { router } from 'expo-router';

type Props = {
  itemList: CarouselDataType[];
};

export default function Slider() {
  return (
    <View className="flex-1 justify-between">
      <FlatList
        data={ImageSlider}
        renderItem={({ index, item }) => <SliderItem index={index} item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <View className="items-end p-8">
        <TouchableOpacity
          onPress={() => router.push('/onBoarding/welcome')}
          className="rounded-full bg-[#171C1F] p-4">
          <MoveRight color={'#FFF'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
