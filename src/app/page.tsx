import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="h-full w-full">
      <div className="w-[90%] xsm:w-full mtb:max-w-[850px] tb:max-w-[1024px] xl:max-w-[1280px] laptop:max-w-[1340px] xsm:px-16 md:px-8 mtb:px-6 tb:px-16 lg:px-20 mx-auto h-full">
        <div className="flex flex-col md:flex-row items-start xsm:items-center justify-between xsm:gap-8 xl:gap-10 md:pt-8 sm:pb-3 md:pb-16">
          <div className="w-full text-left min-[380px]:text-center md:text-left order-2 md:order-none">
            <span className="text-sm min-[350px]:text-base xl:text-lg">Web-App Developer</span>
            <h1 className="min-[350px]:h1 text-[34px] leading-[1.1] font-semibold mb-4 xsm:mb-6">
              Hello I&apos;m <br/> <span className="text-accent">Abraham Precious</span>
            </h1>
            <p className="max-w-[480px] xl:max-w-[580px] mx-auto xl:mx-0 mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am proficient 
              in various programming languages and technologies
            </p>
            <div className="flex flex-col md:flex-row items-start min-[380px]:items-center gap-8 md:gap-3 mtb:gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-download"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </Button>
              <div className="mb-8 md:mb-0">
                <Social 
                  containerStyles="flex gap-3 mtb:gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-none mx-auto mb-8 md:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
}
