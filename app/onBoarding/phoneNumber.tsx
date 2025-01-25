import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '~/components/Button';
import { router } from 'expo-router';

export default function PhoneNumber() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNumber: '',
    },
  });
  const onSubmit = (data: any) => console.log(data);
  const handlePhoneNumber = () => {
    handleSubmit(onSubmit);
    router.push('/onBoarding/code');
  };
  return (
    <View className="px-4">
      <Text className="px-4 pt-3 text-xs leading-4 dark:text-white">
        Enter the phone number you would like to use
      </Text>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="07...."
              keyboardType="phone-pad"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              className="boredr: text-medium placeholder:text-medium border-b border-[#34344A] px-4 py-3"
            />
          )}
          name="phoneNumber"
        />
        {errors.phoneNumber && <Text>This is required.</Text>}
      </View>
      <View className="mt-14">
        <Button title="Continue" onPress={handlePhoneNumber} />
      </View>
    </View>
  );
}
