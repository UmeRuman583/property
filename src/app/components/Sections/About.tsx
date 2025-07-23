// components/AboutUs.tsx

import Image from "next/image";

const AboutUs = () => {
  return (
    <section id="about-us" className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl font-bold mb-4 text-gray-700">About Us</h2>
          <p className="text-gray-700 leading-relaxed font-medium">
            At <strong>Trust Property Keys</strong>, we&apos;re making rentals simple for homeowners and residents. Our mission is to streamline the rental process, providing seamless and efficient solutions for both property owners and tenants. We believe that renting should be straightforward and stress-free, and we are dedicated to making that a reality for you.
          </p>
        </div>

        {/* 3D Left-Tilted Image */}
        <div className="md:w-1/2">
          <div className="perspective-custom">
            <div className="transform-style preserve-3d transform -rotate-y-8 shadow-xl rounded-xl overflow-hidden transition-transform duration-700">
              <Image
                src="/bg4.jpg"
                alt="About Trust Property Keys"
                width={600}
                height={300}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
