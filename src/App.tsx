import "./App.css";

function App() {
  return (
    <main className="bg-primary h-screen px-4 text-black-primary">
      <div className="space-y-4 pb-7 text-center sm:text-left md:space-y-7 lg:pb-0 pt-[6%]">
        <div>
          <p className="font-denim text-xl">Media enquiries:</p>
          <a className="text-lg" href="mailto:press@tuum.com">
            press@tuum.com
          </a>
        </div>
        <div>
          <p className="text-xl">Career questions:</p>
          <a className="text-lg" href="mailto:careers@tuum.com">
            careers@tuum.com
          </a>
        </div>
      </div>
      <div className="bg-white tall:py-6 tall-md:py-8 py-8 px-8 lg:px-10 xl:px-16 rounded-[40px]">
        <fieldset className="mb-8">
          <h1 className="text-5xl font-recklessNeue">Contact us</h1>
        </fieldset>
      </div>
    </main>
  );
}

export default App;
