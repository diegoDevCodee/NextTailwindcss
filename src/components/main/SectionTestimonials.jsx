function SectionTestimonials() {
  return (
    <section id="testimonials" className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-gray-200">
        Testimonials
      </h2>

      <figure className="my-12">
        <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
          <p
            className="text-2xl sm:text-3xl text-left mt-2 text-gray-200 dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-gray-200 before:opacity-25 before:transform before:translate-x-2 before:translate-y-2
          after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-gray-200 after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2 
          "
          >
            Acme has always been there for me. Their Explorer rocket arrived in
            a wooden crate as expected. Life-long customer! A++ shopping
            experience.
          </p>
        </blockquote>
        <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
          &#8212;Wile E. Coyote, Genius
        </figcaption>
      </figure>

      <figure className="my-12">
        <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
          <p
            className="text-2xl sm:text-3xl text-left mt-2 text-gray-200 dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-gray-200 before:opacity-25 before:transform before:translate-x-2 before:translate-y-2
          after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-gray-200 after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2 
          "
          >
            The Acme Adventure Rocket has thwarted my Illudium Q-36 Explosive
            Space Modulator on several occcassions,{" "}
            <span className="italic">This makes me very, very angry!</span>{" "}
            Nevertheless, K-9 and I have awarded Acme the Martian contract for
            space exploration rockets based on Acme&apos;s quality and sturdy
            designs.
          </p>
        </blockquote>
        <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
          &#8212;Marvin The Martian
        </figcaption>
      </figure>

      <figure className="my-12">
        <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
          <p
            className="text-2xl sm:text-3xl text-left mt-2 text-gray-200 dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-gray-200 before:opacity-25 before:transform before:translate-x-2 before:translate-y-2
          after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-gray-200 after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2 
          "
          >
            I knew I not only wanted &#8212;
            <span className="italic"> I needed </span> &#8212; Acme&apos;s
            Infinity Rocket for my mission in space. Acme delivered in one day!
            Nothing says <q className="italic">Take me to your leader</q> like
            Acme&apos;s Infinity Rocket! 💯
          </p>
        </blockquote>
        <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
          &#8212;Buzz Lightyear
        </figcaption>
      </figure>
    </section>
  );
}

export default SectionTestimonials;
