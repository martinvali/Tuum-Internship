import "./App.css";
import "./freakflags.css";
import { Select, SelectProps, Group, TextInput, Textarea } from "@mantine/core";
function App() {
  const data = [{ value: "DZ", label: "Algeria" }];

  const renderSelectOption: SelectProps["renderOption"] = ({ option }) => (
    <Group flex="1" gap="xs">
      {option.label}
      <div className={`fflag fflag-${option.value} w-[21px] h-[13.5px]`}></div>
    </Group>
  );

  return (
    <main className="bg-primary h-screen px-4 text-black-primary">
      <div className="space-y-4 pb-7 text-center sm:text-left md:space-y-7 lg:pb-0 pt-[6%]">
        <button
          aria-label="close"
          className="absolute z-50 bg-close-icon bg-center bg-contain	bg-no-repeat right-[20px] sm:right-[70px] md:right-[102px] lg:right-[108px] xl:right-[172px] lg:top-[52px] w-10 h-10"
        ></button>
        <div className="!mt-0">
          <p className="font-denim text-xl">Media enquiries:</p>
          <a className="text-lg" href="mailto:press@tuum.com">
            press@tuum.com
          </a>
        </div>
        <div>
          <p className="font-denim text-xl">Career questions:</p>
          <a className="text-lg" href="mailto:careers@tuum.com">
            careers@tuum.com
          </a>
        </div>
      </div>
      <div className="bg-white tall:py-6 tall-md:py-8 py-8 px-8 lg:px-10 xl:px-16 rounded-[40px]">
        <fieldset className="mb-8">
          <h1 className="text-5xl font-recklessNeue">Contact us</h1>
        </fieldset>
        <TextInput placeholder="First name" />
        <TextInput placeholder="Last name" />
        <TextInput placeholder="Email" />
        <TextInput placeholder="Job title" />

        <Select
          label="Your favorite library"
          placeholder="Country"
          data={data}
          renderOption={renderSelectOption}
        />
        <TextInput placeholder="Company name" />
        <Textarea placeholder="What would you like to talk about?" />
      </div>
    </main>
  );
}

export default App;
