import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroUnit() {
  return (
    <section className="relative w-screen pt-32 pb-16 md:py-0 md:min-h-180 bg-dark overflow-hidden">
      <div className="absolute left-0 top-0 md:right-0 md:left-auto w-full md:w-2/3 h-full after:absolute after:inset-0 after:bg-black/48 md:after:bg-black/20">
        <Image
          src="/hero-bg.jpg"
          alt="Prestige Bentley vehicle following a full valet from AK Mobile Valeting"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="wrapper">
        <div className="container">
          <div className="relative flex flex-col justify-center min-h-64 md:min-h-180 w-full md:w-1/3 min-w-80 text-white text-center md:text-left md:bg-dark">
            <div className="flex flex-col">
              <p className="text-4xl font-bold uppercase text-nowrap sm:text-6xl md:text-7xl">
                Friendly
              </p>
              <p className="sm:ml-10 text-4xl font-bold uppercase text-nowrap sm:text-6xl md:text-7xl">
                Professional
              </p>
              <p className="sm:ml-20 text-4xl font-bold uppercase text-nowrap sm:text-6xl md:text-7xl">
                High Class
              </p>
            </div>

            <h1 className="mt-6 text-base font-bold uppercase md:text-nowrap text-white md:text-2xl">
              Mobile Valeting Service in Stoke-on-Trent
            </h1>

            <div className="mt-10 flex flex-row justify-center md:justify-start gap-4">
              <Link href="#what-we-offer">
              <Button
                variant="outline"
                colour="light"
                border="rounded"
                className=""
              >
                What we offer</Button>
              </Link>

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
    </section>
  );
}