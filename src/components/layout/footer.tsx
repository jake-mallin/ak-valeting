import ContactForm from "../forms/ContactForm";

type FooterProps = {
  facebookUrl?: string;
  phoneNumber?: string;
};

export default function Footer({
  facebookUrl = "https://www.facebook.com/AKMValeting",
  phoneNumber = "07951 803181",
}: FooterProps) {
  
  return (
    <footer className="w-screen py-8 md:py-12 lg:py-20 bg-dark-3" id="contact">
      <div className="wrapper">
        <div className="container flex flex-col md:flex-row items-start md:justify-between gap-10 lg:gap-20">
          <div className="flex flex-col md:items-start w-full md:min-w-96">
            <h3 className="text-xl md:text-2xl leading-4 md:leading-6 font-bold text-white mb-4 md:mb-6">Contact us</h3>
            <div className="w-full">
              <ContactForm />
            </div>
          </div>
          <div className="flex flex-col md:items-start w-full md:min-w-96">
            <h3 className="text-xl md:text-2xl leading-4 md:leading-6 font-bold text-white mb-4 md:mb-6">Working Hours</h3>
            <ul className="flex flex-col gap-2 mb-4 md:mb-5 w-full md:min-w-60 lg:min-w-96">
              <li className="flex items-center justify-between pb-1 text-white text-base leading-6 border-b border-neutral-300">
                <span>Mon-Fri</span>
                <span className="font-bold">09:00 - 17:00</span>
              </li>
              <li className="flex items-center justify-between pb-1 text-white text-base leading-6 border-b border-neutral-300">
                <span>Saturday</span>
                <span className="font-bold">09:00 - 12:00</span>
              </li>
              <li className="flex items-center justify-between pb-1 text-white text-base leading-6 border-b border-neutral-300">
                <span>Sunday</span>
                <span className="font-bold">Closed</span>
              </li>
            </ul>
            <p className="text-white">Out of hours appointments are available</p>
          </div>
          <div className="flex flex-col items-start w-full md:min-w-96 gap-4 md:gap-6">
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              className="flex justify-center items-center gap-2.5 px-3 py-2 bg-[#1877F2] rounded-lg text-white text-base font-bold leading-6 transition hover:brightness-120"
            >
              <i className="fa fa-facebook-f" />
              <span></span>
            </a>
            <a
              href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
              className="flex items-center gap-2.5 px-3 py-2 bg-black rounded-lg text-base font-bold leading-6 text-white/80 transition hover:bg-black hover:text-white"
              aria-label={`Call us on ${phoneNumber}`}
            >
              <div className="flex items-center h-6">
                <i className="fa fa-phone" />
              </div>
              <span>{phoneNumber}</span>
            </a>
            <a
              href={`mailto:jake.mallin@gmail.com`}
              className="flex items-center gap-2.5 text-base leading-6 text-white/80 transition hover:text-white"
              aria-label={`Email us at jake.mallin@gmail.com`}
            >
              <i className="fa fa-code" />
              <span>Website design by JM Web Design</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}