import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { router } from 'expo-router';
import { useForm, Controller, FieldErrors } from 'react-hook-form';
import Cancel from '~/assets/svgs/cancel';
import UserCheck from '~/assets/svgs/user_check';
import RightChevron from '~/assets/svgs/right_chevron';
import UserX from '~/assets/svgs/userX';

// Define the form data type
type FormData = {
  userName: string;
  phoneNumber: string;
  email: string;
};

export default function AccountInfo() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      userName: '',
      phoneNumber: '',
      email: '',
    },
  });

  const onSubmit = (data: FormData) => console.log(data);

  const handleCode = () => {
    handleSubmit(onSubmit)();
    // router.push('/onBoarding/carousel');
  };

  // Reusable Input Field Component
  const renderInputField = (
    name: keyof FormData, // Ensure `name` is a key of FormData
    label: string,
    placeholder: string,
    keyboardType: 'default' | 'email-address' | 'phone-pad' | 'twitter',
    rules: any
  ) => (
    <View className="my-3">
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Text className="text-tiny">{label}</Text>
            <View className="flex-row items-center justify-between border-b border-[#34344A]">
              <TextInput
                placeholder={placeholder}
                keyboardType={keyboardType}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="text-medium placeholder:text-medium py-3"
              />
              <TouchableOpacity>
                <Cancel color={'#FFF'} />
              </TouchableOpacity>
            </View>
          </>
        )}
        name={name}
      />
      {errors[name] && <Text className="text-white">This is required.</Text>}
    </View>
  );

  return (
    <View className="mx-8">
      {/* Header */}
      <Stack.Screen options={{ headerTitle: 'Account info', headerTitleAlign: 'center' }} />

      {/* Input Fields */}
      {renderInputField('userName', 'Name', 'userName', 'twitter', { required: true })}
      {renderInputField('phoneNumber', 'Phone Number', 'userNumber', 'phone-pad', {
        required: true,
      })}
      {renderInputField('email', 'Email', 'userEmail', 'email-address', { required: true })}

      {/* Account Deletion Button */}
      <TouchableOpacity className="mt-4 flex-row justify-between py-3" onPress={handleCode}>
        <View className="flex-row gap-5">
          <UserX color={'#FFF'} />
          <Text className="text-medium">Account deletion</Text>
        </View>
        <RightChevron color={'#FFF'} />
      </TouchableOpacity>
    </View>
  );
}
