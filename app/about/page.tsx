export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
        We are a passionate team dedicated to delivering top-tier web solutions. Our focus centers on design clarity, reliable infrastructure, and fluid user interaction.
      </p>

      <div className="grid md:grid-cols-2 gap-8 my-10">
        <div className="border rounded-lg p-6 bg-card">
          <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            To build fast, scalable, and manageable web products that empower organizations to showcase their work effortlessly.
          </p>
        </div>
        <div className="border rounded-lg p-6 bg-card">
          <h2 className="text-xl font-semibold mb-3">Our Vision</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Combining cutting-edge frontend architecture with simple, headless management workflows for seamless content publishing.
          </p>
        </div>
      </div>
    </div>
  )
}