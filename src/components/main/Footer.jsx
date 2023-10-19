function Footer() {
  return (
    <footer id="footer" className="bg-teal-700 text-gray-200 text-xl">
      <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
        <address>
          <h2>Acme Rocket-Powered Products, Inc.</h2>
          55 Astro Way <br />
          Fairfield, New jersey 12345-5555 <br />
          Email:{" "}
          <a href="mailto:inquiries@acmerockets">Inquires@AcmeRockets.com</a>
          Phone: <a href="tel:+1555555555">(555) 555-5555</a>
        </address>
        <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
          <a href="#rockets" className="hover:opacity-90">
            Our Rockets
          </a>
          <a href="#testimonials" className="hover:opacity-90">
            Testimonials
          </a>
          <a href="#contact" className="hover:opacity-90">
            Contact
          </a>
        </nav>
        <div className="flex flex-col sm:gap-2 mt-4 sm:mt-0">
          <p className="text-right">
            Copyright &copy; <span id="year">2023</span>
          </p>
          <p className="text-right">All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
