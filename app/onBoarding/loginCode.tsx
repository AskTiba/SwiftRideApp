import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '~/components/Button';

export default function LoginCode() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      code: '',
    },
  });
  const onSubmit = (data: any) => console.log(data);
  const handleCode = () => {
    handleSubmit(onSubmit);
    router.push('../profileManagement/');
  };
  return (
    <View className="px-4">
      <Text className="text-heading px-4 pt-4 leading-4 dark:text-white">
        Welcome back {'{userName}'}
      </Text>
      <View className='px-4'>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Enter OTP code"
              keyboardType="number-pad"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              className="boredr: text-medium placeholder:text-medium border-b border-[#34344A] py-3"
            />
          )}
          name="code"
        />
        {errors.code && <Text className="text-white">This is required.</Text>}
      </View>
      <Text className="px-4 pt-3 text-xs leading-4 dark:text-white">
        Code sent via SMS to {`{number}`}
      </Text>

      <View className="my-3 mt-14">
        <Button onPress={handleCode} title="Continue" />
      </View>
      <View className="my-3 ">
        <Button
          className="border border-[#32324A] bg-transparent"
          title="I did not receive a code"
          // onPress={}
        />
      </View>
    </View>
  );
}
