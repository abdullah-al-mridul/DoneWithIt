import { Stack } from "expo-router";

const ListingLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Listings" }} />

      <Stack.Screen
        name="[id]"
        options={{
          title: "Listing Details",
          headerShown: false,
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default ListingLayout;
