import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Account",
          headerShown: true,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="messages"
        options={{ title: "Messages", headerShown: true }}
      />
    </Stack>
  );
};

export default Layout;
