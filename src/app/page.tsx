import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import HeroUnit from "@/components/layout/hero-unit";
import Footer from "@/components/layout/footer";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  name: "",
  image: "https://www.akmobilevaleting.co.uk/og-image.jpg",
  url: "https://www.akmobilevaleting.co.uk",
  telephone: "07951 803181",
  description:
    "Professional mobile car valeting service established in 2008, serving Staffordshire, North Staffordshire and South Cheshire.",
  areaServed: [
    {
      "@type": "Place",
      name: "Staffordshire",
    },
    {
      "@type": "Place",
      name: "North Staffordshire",
    },
    {
      "@type": "Place",
      name: "South Cheshire",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "12:00",
    },
  ],
  sameAs: ["https://www.facebook.com/AKMValeting"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <Header />
      <div className="flex flex-col flex-1 bg-background">
        <HeroUnit />
        <main className="wrapper flex flex-col gap-6 md:gap-12 lg:gap-20 py-6 md:py-12 lg:py-20">
          <div className="container flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12">
            <div className="grow shrink basis-auto max-w-152">
              <Image src="/promo-1.jpg" alt="AK Mobile Valeting van providing mobile car valeting in Staffordshire" width={624} height={468} className="object-cover" />
            </div>
            <div className="grow shrink basis-auto">
              <div className="flex flex-col gap-4 md:gap-6">
                <p className="text-foreground text-xl font-medium leading-7">AK Valeting is a professional mobile car valeting service established in 2008, proudly serving North Staffordshire and South Cheshire.</p>
                <div className="flex flex-col gap-3 md:gap-4">
                  <p className="text-neutral-700 text-base leading-6">We use high-quality products from trusted brands such as Autosmart and Autoglym, the same materials used by leading car dealerships, to ensure every vehicle receives the best possible care. </p>
                  <p className="text-neutral-700 text-base leading-6">Whether you need regular weekly, fortnightly, or monthly maintenance valets, or a one-off full valet when selling or returning a lease vehicle, our goal is to deliver showroom-quality results at a competitive price. </p>
                  <p className="text-neutral-700 text-base leading-6">With full public liability insurance and our own water and electricity supply, we can conveniently valet your car at your home or workplace while you carry on with your day.</p>
                </div>
                <ul className="flex flex-wrap gap-4 md:gap-6">
                  <li className="flex items-center gap-2 text-neutral-700 text-base leading-6">
                    <div className="flex justify-center items-center bg-accent text-white w-8 h-8 rounded">
                      <i className="fa fa-phone" />
                    </div>
                    <span className="text-foreground text-xl font-semibold">07951 803181</span>
                  </li>
                  <li className="flex items-center gap-2 text-neutral-700 text-base leading-6">
                    <div className="flex justify-center items-center bg-accent text-white w-8 h-8 rounded">
                      <i className="fa fa-envelope" />
                    </div>
                    <span className="text-foreground text-xl font-semibold">Drop us an email</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container-sm flex flex-col-reverse md:grid md:grid-cols-2 gap-6 md:gap-10" id="what-we-offer">
            <div className="grow shrink basis-auto">
              <div className="flex flex-col gap-4 md:gap-6">
                <h2 className="text-foreground text-2xl md:text-3xl lg:text-4xl font-bold leading-8 md:leading-10 lg:leading-12">Regular valeting to keep your vehicle pristine</h2>
                <div className="flex flex-col gap-3 md:gap-4">
                  <p className="text-dark-2 text-xl leading-7">If you’re looking to get a regular service, whether that be weekly, fortnightly or monthly,  will keep your vehicle looking at its best both inside and out.</p>
                </div>
                <ul className="flex flex-col self-start gap-4 md:gap-6">
                  <li className="flex items-center gap-2 pb-1.5 text-dark-2 text-base md:text-lg lg:text-xl leading-6 border-b border-neutral-300">
                    <i className="far fa-check-circle text-success" />
                    <span className="font-semibold">Exterior valet</span>
                  </li>
                  <li className="flex items-center gap-2 pb-1.5 text-dark-2 text-base md:text-lg lg:text-xl leading-6 border-b border-neutral-300">
                    <i className="far fa-check-circle text-success" />
                    <span className="font-semibold">Interior valet</span>
                  </li>
                  <li className="flex items-center gap-2 pb-1.5 text-dark-2 text-base md:text-lg lg:text-xl leading-6 border-b border-neutral-300">
                    <i className="far fa-check-circle text-success" />
                    <span className="font-semibold">Boot valet</span>
                  </li>
                  <li className="flex items-center gap-2 pb-1.5 text-dark-2 text-base md:text-lg lg:text-xl leading-6 border-b border-neutral-300">
                    <i className="far fa-check-circle text-success" />
                    <span className="font-semibold">Wheels Cleaned</span>
                  </li>
                  <li className="flex items-center gap-2 pb-1.5 text-dark-2 text-base md:text-lg lg:text-xl leading-6">
                    <i className="far fa-check-circle text-success" />
                    <span className="font-semibold">Windows cleaned inside & outside</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grow shrink basis-auto max-w-152">
              <Image src="/promo-2.jpg" alt="AK Mobile Valeting giving a valet to a prestige vehicle" width={1511} height={1595} className="object-cover" />
            </div>
          </div>
          <div className="container-sm flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12">
            <div className="grow shrink basis-auto max-w-152">
              <Image src="/promo-3.jpg" alt="AK Mobile Valeting valeting a commercial vehicle" width={2000} height={1500} className="object-cover" />
            </div>
            <div className="grow shrink basis-auto">
              <div className="flex flex-col gap-4 md:gap-6">
                <h2 className="text-foreground text-2xl md:text-3xl lg:text-4xl font-bold leading-8 md:leading-10 lg:leading-12">Or just looking for that showroom fresh feel?</h2>
                <div className="flex flex-col gap-3 md:gap-4">
                  <p className="text-dark-2 text-lg md:text-xl leading-7">Maybe you’re looking to sell your vehicle and want it looking immaculate for potential buyers?  can help you get your car showroom ready to make it appealing and stand out from the crowd.</p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="#contact">
                    <Button
                      variant="solid"
                      colour="accent"
                      border="rounded"
                      className=""
                    >
                      Get in touch</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
