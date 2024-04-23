import ContactTexts from "./components/contacts/ContactTexts";

import Form from "./components/form/Form";

function App() {
  return (
    <main className="bg-primary h-screen overflow-x-hidden">
      <div className="px-4 md:px-8 relative max-w-7xl mx-auto">
        <button
          aria-label="close"
          className="absolute z-50 bg-close-icon bg-center bg-contain	bg-no-repeat right-[20px] sm:right-[70px] md:right-[102px] lg:right-[108px] xl:right-[172px] lg:top-[52px] w-10 h-10 focus-visible:outline-black-primary/50"
        ></button>
        <div className="mt-[6%] mediumHeight:mt-[3%] tallHeight:mt-[6%] pb-[6%] mediumHeight:pb-[3%] sm:px-10 md:px-16 lg:px-10 xl:px-20 lg:flex lg:flex-row lg:justify-center lg:items-start">
          <ContactTexts />
          <Form />
        </div>
      </div>
    </main>
  );
}

export default App;
