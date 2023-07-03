import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container flex items-center justify-center min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between">
            <h1 className="text-3xl font-extrabold">Vite + React</h1>
            <div className="flex">
              <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="animate-ping" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img
                  src={reactLogo}
                  className="animate-spin"
                  alt="React logo"
                />
              </a>
            </div>
          </CardTitle>
          <CardDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col">
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <div className="inline-flex gap-2">
            Edit <code>src/App.tsx</code> and save to test HMR
          </div>
        </CardContent>
        <CardFooter>
          <p>Click on the Vite and React logos to learn more</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
