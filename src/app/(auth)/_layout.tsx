import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack
    //   screenOptions={{
    //     headerStyle: { backgroundColor: "#f4511e" },
    //     headerTintColor: "#fff",
    //     headerTitleStyle: { fontWeight: "bold" },
    //   }}
    >
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="register" options={{ title: "Create New Account" }} />
    </Stack>
  );
};

export default _layout;
