import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function App() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <PayPalScriptProvider
        options={{
          "client-id":
            "AcwCr08xgyuunHb6wDbf06DZ16rdD-TLTW8YNEwo24kJj7Exfy_gohM9AWgUdbFw7InLaEjHtMsN7AYh",
        }}
      >
        <PayPalButtons
          style={{
            layout: "horizontal",
            color: "gold",
            shape: "pill",
            height: 55,
            label: "paypal",
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}
