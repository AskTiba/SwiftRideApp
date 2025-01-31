import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '~/components/Button';
import Google from '~/assets/svgs/google';
import Apple from '~/assets/svgs/apple';

export default function LoginwithNumber() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNumber: '',
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
    router.push('/onBoarding/loginCode');
  };

  const handleCode = () => {
    handleSubmit(onSubmit);
    router.push('/onBoarding/carousel');
  };
  const handleApple = () => {
    handleSubmit(onSubmit);
    // router.push('/home');
    router.push('/home/mapbox');
  };
  return (
    <View className="px-4">
      <Text className="px-4 pt-3 text-xs leading-4 dark:text-white">Enter your mobile number</Text>
      <View className="px-4">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="07........"
              keyboardType="number-pad"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              className="boredr: text-medium placeholder:text-medium border-b border-[#34344A] py-3"
            />
          )}
          name="phoneNumber"
        />
        {errors.phoneNumber && <Text className="text-white">This is required.</Text>}
      </View>
      <View className="mt-14">
        <Button title="Continue" onPress={handleSubmit(onSubmit)} />
      </View>
      <View className=" my-5">
        <Text className="text-medium text-center">Or</Text>
      </View>
      <View className="my-3">
        <Button
          className="border border-[#32324A] bg-transparent"
          leftIcon={<Google />}
          title="Continue with Google"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
      <View className="">
        <Button
          className="border border-[#32324A] bg-transparent"
          leftIcon={<Apple />}
          title="Continue with Apple"
          onPress={handleApple}
        />
      </View>
    </View>
  );
}
