import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Welcome", headerShown: false }}
      />
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="register" options={{ title: "Create New Account" }} />
    </Stack>
  );
};

export default Layout;
