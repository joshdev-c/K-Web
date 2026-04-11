export default function About() {
  return (
    <section id="services" className="py-24 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-8">
          {/* RIGHT */}
          <div className="p-12">
            <div className="mb-16">
              <p className="text-muted-foreground mb-2 uppercase tracking-wider">
                About Us
              </p>
              <h2 className="text-4xl md:text-5xl">What we do...</h2>
            </div>
            <p className="text-gray-700">
              We aim to provide the best services to our customers, ensuring
              quality and satisfaction in every interaction.
            </p>
          </div>
          {/* LEFT */}
          <div className="p-12">
            <img src="images/image1.jpg" alt="ALT" />
            <img src="images/image2.jpg" alt="ALT" />
          </div>
        </div>
      </div>
    </section>
  );
}
