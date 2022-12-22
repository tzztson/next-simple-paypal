import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function App() {
  const [total, setTotal] = useState<number>(0);
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center gap-8 h-[100vh] px-24 ">
        <input
          type="text"
          className="w-full pl-4 py-2 outline-none border-2 border-blue-400 focus:border-blue-600 rounded-lg font-bold text-2xl"
          value={total}
          onChange={(e: any) => setTotal(e.target.value)}
        />
        <PayPalScriptProvider
          options={{
            "client-id":
              "AeeXSsrMzJT4wIV5uWdZELlqce9ixxNtdjCbGKjtSJ8yrqz1UVtvQ0jFRj-oZNs8f-G8PojBzQ63MOE6",
          }}
        >
          <PayPalButtons
            forceReRender={[total]}
            style={{
              layout: "horizontal",
              color: "gold",
              shape: "pill",
              label: "paypal",
              height: 55,
            }}
            createOrder={(data, actions) => {
              let price = total * 1.5;
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: price.toString(),
                    },
                  },
                ],
              });
            }}
            onApprove={(data: any, actions: any) => {
              try {
                return actions.order.capture().then((details: any) => {
                  const name = details.payer.name.given_name;
                  alert(`Transaction completed by ${name}`);
                });
              } catch (err) {
                console.log(err);
              }
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
}
