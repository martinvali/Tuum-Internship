function ContactTexts() {
  return (
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
  );
}

export default ContactTexts;
