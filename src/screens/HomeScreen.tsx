import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [dropoffDate, setDropoffDate] = useState<Date | null>(null);
  const [pickupTime, setPickupTime] = useState<string | null>(null);
  const [dropoffTime, setDropoffTime] = useState<string | null>(null);

  const [showPickupDate, setShowPickupDate] = useState(false);
  const [showDropoffDate, setShowDropoffDate] = useState(false);
  const [showPickupTime, setShowPickupTime] = useState(false);
  const [showDropoffTime, setShowDropoffTime] = useState(false);

  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
        <TouchableOpacity className="flex-row items-center">
          <Text className="text-lg font-semibold mr-1">
            Caxias do Sul
          </Text>
          <Ionicons name="chevron-down" size={18}/>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center gap-1">
          <Ionicons name="pricetag-outline" size={18} />
          <Text className="text-lg font-semibold mr-1">
            Offers
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View className="p-4">
          <Text className="text-2xl font-bold mb-3">
            Book Now, Tow anywhere
          </Text>
          <View className="bg-white rounded-xl shadow-sm p-3 border-green-300 border">
            <Text className="font-semibold mb-2">Pick Up</Text>
            <View className="flex-row mb-4 gap-2">
              <TouchableOpacity
                className="flex-1 flex-row items-center border border-gray-200 rounded-lg px-3 py-2 bg-white"
                onPress={() => {
                  setShowPickupDate(true);
                  setShowPickupTime(false);
                }}
              >
                <Ionicons name="calendar-outline" size={18} color="gray"/>
                <Text className="ml-2 text-sm text-gray-700">{pickupDate ? pickupDate.toLocaleDateString() : "Select Date"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-1 flex-row items-center border border-gray-200 rounded-lg px-3 py-2 bg-white"
                onPress={() => {
                  setShowPickupTime(true);
                  setShowPickupDate(false);
                }}
              >
                <Ionicons name="time-outline" size={18} color="gray"/>
                <Text className="ml-2 text-sm text-gray-700">{pickupTime ? pickupTime : "Select Time"}</Text>
              </TouchableOpacity>
            </View>
            <Text className="font-semibold mb-2">Drop Off</Text>
            <View className="flex-row mb-5 gap-2">
              <TouchableOpacity
                className="flex-1 flex-row items-center border border-gray-200 rounded-lg px-3 py-2 bg-white"
                onPress={() => {
                  setShowDropoffDate(true);
                  setShowDropoffTime(false);
                }}
              >
                <Ionicons name="calendar-outline" size={18} color="gray"/>
                <Text className="ml-2 text-sm text-gray-700">{dropoffDate ? dropoffDate.toLocaleDateString() : "Select Date"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-1 flex-row items-center border border-gray-200 rounded-lg px-3 py-2 bg-white"
                onPress={() => {
                  setShowDropoffTime(true);
                  setShowDropoffDate(false);
                }}
              >
                <Ionicons name="time-outline" size={18} color="gray"/>
                <Text className="ml-2 text-sm text-gray-700">{dropoffTime ? dropoffTime : "Select Time"}</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity className="bg-green-600 rounded-lg py-2 mb-1 items-center">
              <Text className="text-center font-bold text-white text-base">
                Search
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-6">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}>
            <View className="w-48 mr-4 rounded-xl">
              <Image
                source={{
                  uri: "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/151/medium/HONDA_HORNET_160.png",
                }}
                className="w-48 h-32 rounded-xl"
                resizeMode="cover"
              />
              <Text className="text-center font-semibold mt-2 mb-3">
                RBX Subscription
              </Text>
            </View>
            <View className="w-48 mr-4 rounded-xl">
              <Image
                source={{
                  uri: "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/247/medium/Bajaj_Pulsar_150_neon.png",
                }}
                className="w-48 h-32 rounded-xl"
                resizeMode="cover"
              />
              <Text className="text-center font-semibold mt-2 mb-3">
                Low Prices
              </Text>
            </View>
            <View className="w-48 rounded-xl">
              <Image
                source={{
                  uri: "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/299/medium/ROYAL_ENFIELD_HIMALAYAN_GRAVEL_GREY.png?1660730284",
                }}
                className="w-48 h-32 rounded-xl"
                resizeMode="cover"
              />
              <Text className="text-center font-semibold mt-2 mb-3">
                Adventures by RB
              </Text>
            </View>
          </ScrollView>
        </View>

        {/* Promo Banner */}
        <View className="mt-6 px-4">
          <View className="bg-white rounded-xl shadow-md overflow-hidden">
            <Image
              source={{
                uri: "https://d36g7qg6pk2cm7.cloudfront.net/assets/RBX-offer-194940429645abdee50c6e6711844bb4c8554a72c9c46a339ce202888c57e5d9.jpg",
              }}
              className="w-full h-52"
              resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
