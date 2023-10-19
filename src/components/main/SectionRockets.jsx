import Image from "next/image";
import rocketMan from "@/public/img/rocketman.png";
import rocketRide from "@/public/img/rocketride.png";
import rocketLaunch from "@/public/img/rocketlaunch.png";

function SectionRockets() {
  return (
    <section id="rockets" className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-gray-200">
        Our Rockets
      </h2>
      <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
        <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
          <Image
            src={rocketMan}
            alt="Rocket man"
            className="w-1/2 mb-6"
            width={500}
            height={500}
            quality={100}
          />
          <h3 className="text-3xl text-center text-slate-900 dark:text-gray-200">
            Explorer
          </h3>
          <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-gray-400">
            $
          </p>
          <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-gray-400">
            Affordable Exploration
          </p>
        </li>

        <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
          <Image
            src={rocketRide}
            alt="Adventurer"
            className="w-1/2 mb-6"
            width={500}
            height={500}
            quality={100}
          />
          <h3 className="text-3xl text-center text-slate-900 dark:text-gray-200">
            Adventurer
          </h3>
          <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-gray-400">
            $$
          </p>
          <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-gray-400">
            Best Selling Rocket!
          </p>
        </li>

        <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
          <Image
            src={rocketLaunch}
            alt="Infinity"
            className="w-1/2 mb-6"
            width={500}
            height={500}
            quality={100}
          />
          <h3 className="text-3xl text-center text-slate-900 dark:text-gray-200">
            Infinity
          </h3>
          <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-gray-400">
            $$$
          </p>
          <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-gray-400">
            Luxury Starship
          </p>
        </li>
      </ul>
    </section>
  );
}

export default SectionRockets;
