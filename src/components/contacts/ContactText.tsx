interface ContactTextInputProps {
  text: string;
  email: string;
}

const ContactText: React.FC<ContactTextInputProps> = ({ text, email }) => {
  return (
    <div>
      <p className="font-denim text-xl md:font-recklessNeue md:text-4xl md:tracking-[-0.02em] leading-[1.875rem] md:leading-[2.75rem]">
        {text}
      </p>
      <a
        className="font-denim text-lg leading-[1.75rem] relative after:content-[''] after:block after:w-full after:h-px after:bg-[#140a24] after:absolute after:left-0 after:-bottom-0.5 hover:after:w-0 hover:after:bg-transparent after:duration-500 focus-visible:rounded focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-black-primary/50"
        href={`mailto:${email}`}
      >
        {email}
      </a>
    </div>
  );
};
export default ContactText;
