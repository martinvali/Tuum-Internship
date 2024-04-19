import ContactText from "./ContactText";

function ContactTexts() {
  return (
    <div className="space-y-4 pb-7 text-center sm:text-left md:space-y-7 lg:pb-0 lg:flex-1 lg:basis-[35%]">
      <ContactText text="Media enquiries:" email="press@tuum.com" />
      <ContactText text="Career questions:" email="careers@tuum.com" />
    </div>
  );
}

export default ContactTexts;
