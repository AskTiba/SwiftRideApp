import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '~/components/Button';
import Apple from '~/assets/svgs/apple';
import Google from '~/assets/svgs/google';
import { router } from 'expo-router';

// type FormData = {
//   username: string;
// };

export default function Signup() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
    },
  });
  const onSubmit = (data: any) => console.log(data);
  const handleSignInWithGoogle = () => {
    router.push('/onBoarding/phoneNumber');
  };
  return (
    <View className="px-4">
      <View className="">
        <Text className="px-4 pt-3 text-xs leading-4 dark:text-white">
          Enter the username you would like to go by
        </Text>
        <View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="boredr: text-medium placeholder:text-medium border-b border-[#34344A] px-4 py-3"
              />
            )}
            name="username"
          />
          {errors.username && <Text>This is required.</Text>}
        </View>
        <View className="mt-14">
          <Button disabled title="Continue" onPress={handleSubmit(onSubmit)} />
        </View>
        <View className=" my-5">
          <Text className="text-medium text-center">Or</Text>
        </View>
        <View className="my-3">
          <Button
            leftIcon={<Google />}
            title="Continue with Google"
            onPress={handleSignInWithGoogle}
          />
        </View>
        <View className="">
          <Button
            leftIcon={<Apple />}
            title="Continue with Apple"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </View>
  );
}
