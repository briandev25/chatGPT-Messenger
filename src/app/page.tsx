import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className=" text-gray-100 flex flex-col items-center h-screen overflow-y-scroll justify-center px-2">
      <h1 className=" text-3xl font-semibold mb-20">ChatGPT</h1>
      <div className="flex flex-col md:flex-row px-3 md:space-x-3">
        {/* Examples */}
        <div>
          <div className="infoHead">
            <SunIcon className="h-7 w-7 mb-2" />
            Examples
          </div>
          <div className=" space-y-3">
            <p className="infoText1">
              "Explain quantum computing in simple terms"
            </p>
            <p className="infoText1">
              "Got any creative ideas for a 10 year old’s birthday?"
            </p>
            <p className="infoText1">
              "How do I make an HTTP request in Javascript?"
            </p>
          </div>
        </div>
        {/* Capabilities */}
        <div>
          <div className="infoHead">
            <BoltIcon className="h-7 w-7 mb-2" />
            Capabilities
          </div>
          <div className=" space-y-3">
            <p className="infoText">
              Remembers what user said earlier in the conversation
            </p>
            <p className="infoText">
              Allows user to provide follow-up corrections
            </p>
            <p className="infoText">
              Trained to decline inappropriate requests
            </p>
          </div>
        </div>
        {/* Limitations */}
        <div>
          <div className="infoHead">
            <ExclamationTriangleIcon className="h-7 w-7 mb-2" />
            Limitations
          </div>
          <div className=" space-y-3">
            <p className="infoText">
              May occasionally generate incorrect information
            </p>
            <p className="infoText">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="infoText">
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
