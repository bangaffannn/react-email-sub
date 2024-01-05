import Content from "./components/Content";
import Image from './assets/images/image.jpg';

function App() {
  return (
    <body>
      {/* <!-- Background Container --> */}
      <div className="flex items-center justify-center h-screen bg-zinc-700">
        {/* <!-- Card --> */}
        <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
          {/* <!-- Flex Container --> */}
          <div className="flex flex-col md:flex-row rounded-l-xl">
            {/* <!-- Image --> */}
            <img
              src={Image}
              alt="subscription"
              className="object-fit rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
            />
            <Content />
            <div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
              <input
                type="text"
                placeholder="Enter your email address"
                className="px-5 py-3 text-center rounded-md text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"
              />
              <button className="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
