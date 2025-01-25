import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '~/components/Button';
import Information from '~/assets/svgs/info';

export default function Code() {
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
    router.push('/onBoarding/carousel');
  };
  return (
    <View className="px-4">
      <Text className="px-4 pt-3 text-xs leading-4 dark:text-white">Enter OTP code</Text>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder=""
              keyboardType="number-pad"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              className="boredr: text-medium placeholder:text-medium border-b border-[#34344A] px-4 py-3"
            />
          )}
          name="code"
        />
        {errors.code && <Text>This is required.</Text>}
      </View>
      <Text className="px-4 pt-3 text-xs leading-4 dark:text-white">
        Code sent via SMS to {`{number}`}
      </Text>
      <View className="mt-20 flex-row  gap-5 px-4">
        <View className="mt-1">
          <Information width={16} height={16} color={'#fff'} />
        </View>
        <Text className="text-tx">
          By selecting Agree and continue, i agree to {'\n'}SwiftRide’s Terms of service, Payments
          Terms {'\n'}of Service and the Privacy Policy
        </Text>
      </View>
      <View className="my-3 mt-14">
        <Button title="Agree and continue" onPress={handleCode} />
      </View>
      <View className="my-3 ">
        <Button
          className="border border-[#32324A] bg-transparent"
          title="I did not receive a code"
          onPress={handleCode}
        />
      </View>
    </View>
  );
}
