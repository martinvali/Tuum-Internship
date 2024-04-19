import "./App.css";

import Form from "./components/Form";

function App() {
  return (
    <main className="bg-primary h-screen overflow-hidden">
      <div className="px-4 md:px-8 relative max-w-7xl mx-auto">
        <button
          aria-label="close"
          className="absolute z-50 bg-close-icon bg-center bg-contain	bg-no-repeat right-[20px] sm:right-[70px] md:right-[102px] lg:right-[108px] xl:right-[172px] lg:top-[52px] w-10 h-10"
        ></button>
        <div className="mt-[6%] sm:px-10 md:px-16 lg:px-10 xl:px-20 lg:flex lg:flex-row lg:justify-center lg:items-start">
          <div className="space-y-4 pb-7 text-center sm:text-left md:space-y-7 lg:pb-0 lg:flex-1 lg:basis-[35%]">
            <div className="!mt-0">
              <p className="font-denim text-xl md:font-recklessNeue md:text-4xl md:tracking-[-0.02em] leading-[1.875rem] md:leading-[2.75rem]">
                Media enquiries:
              </p>
              <a
                className="font-denim text-lg leading-[1.75rem] relative after:content-[''] after:block after:w-full after:h-px after:bg-[#140a24] after:absolute after:left-0 after:-bottom-0.5 hover:after:w-0 hover:after:bg-transparent after:duration-500"
                href="mailto:careers@tuum.com"
              >
                press@tuum.com
              </a>
            </div>
            <div>
              <p className="font-denim text-xl md:font-recklessNeue md:text-4xl md:tracking-[-0.02em] leading-[1.875rem] md:leading-[2.75rem]">
                Career questions:
              </p>
              <a
                className="font-denim text-lg leading-[1.75rem] relative after:content-[''] after:block after:w-full after:h-px after:bg-[#140a24] after:absolute after:left-0 after:-bottom-0.5 hover:after:w-0 hover:after:bg-transparent after:duration-500"
                href="mailto:careers@tuum.com"
              >
                careers@tuum.com
              </a>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </main>
  );
}

export default App;
