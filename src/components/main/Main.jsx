
import Footer from "./Footer";
import SectionContact from "./SectionContact";
import SectionHero from "./SectionHero";
import SectionRockets from "./SectionRockets";
import SectionTestimonials from "./SectionTestimonials";

function Main() {
  return (
    <>
    <main className="max-w-4xl mx-auto">
      <SectionHero />
      <hr className="mx-auto bg-gray-700 dark:bg-gray-200 w-1/2" />
      <SectionRockets />
      <hr className="mx-auto bg-gray-700 dark:bg-gray-200 w-1/2" />
      <SectionTestimonials />
      <hr className="mx-auto bg-gray-700 dark:bg-gray-200 w-1/2" />
      <SectionContact />
    </main>
    <Footer/>
    </>
  );
}

export default Main;
