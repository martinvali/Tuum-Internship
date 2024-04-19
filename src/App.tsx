import "./App.css";
import "./freakflags.css";
import {
  Select,
  SelectProps,
  Group,
  TextInput,
  Textarea,
  Checkbox,
} from "@mantine/core";
function App() {
  const data = [{ value: "DZ", label: "Algeria" }];

  const renderSelectOption: SelectProps["renderOption"] = ({ option }) => (
    <Group flex="1" gap="xs">
      {option.label}
      <div className={`fflag fflag-${option.value} w-[21px] h-[13.5px]`}></div>
    </Group>
  );

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
          <form className="bg-white tall:py-6 tall-md:py-8 py-8 px-8 lg:px-10 xl:px-16 rounded-[40px] lg:flex-1 lg:basis-[65%]">
            <fieldset className="mb-8">
              <h1 className="text-5xl font-recklessNeue leading-[3.75rem] tracking-[-0.02em]">
                Contact us
              </h1>
            </fieldset>
            <div className="flex flex-row justify-center items-center gap-x-4 mb-4">
              <TextInput
                classNames={{
                  input: "input-styles",
                }}
                className="flex-1"
                placeholder="First name"
              />
              <TextInput
                classNames={{
                  input: "input-styles",
                }}
                className="flex-1"
                placeholder="Last name"
              />
            </div>
            <div className="flex flex-row justify-center items-center gap-x-4 mb-4">
              <TextInput
                classNames={{
                  input: "input-styles",
                }}
                className="flex-1"
                placeholder="Email"
              />
              <TextInput
                classNames={{
                  input: "input-styles",
                }}
                className="flex-1"
                placeholder="Job title"
              />
            </div>
            <div className="flex flex-row justify-center items-center gap-x-4 mb-4">
              <Select
                classNames={{
                  input: "input-styles",
                }}
                className="flex-1"
                placeholder="Country"
                data={data}
                renderOption={renderSelectOption}
              />
              <TextInput
                classNames={{
                  input: "input-styles",
                }}
                className="flex-1"
                placeholder="Company name"
              />
            </div>
            <Textarea
              classNames={{
                input: "input-styles h-36",
              }}
              placeholder="What would you like to talk about?"
            />
            <Checkbox
              size="xs"
              className="mt-4"
              label={
                <p className="font-denim text-base">
                  By submitting this form I accept{" "}
                  <a className="text-[#219dfb] underline" href="">
                    privacy policy
                  </a>{" "}
                  and{" "}
                  <a className="text-[#219dfb] underline" href="">
                    cookie policy.
                  </a>
                  {" *"}
                </p>
              }
            />

            <Checkbox
              size="xs"
              className="mt-4"
              label={
                <p className="font-denim text-base">
                  I would like to receive your newsletter.
                </p>
              }
            />
            <button className="mt-4 bg-primary text-base font-denim py-2.5 px-[1.125rem] rounded-xl hover:bg-[#d0d5dd] color-[#140923]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default App;
