export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#0f0f11] text-white"
      
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About{" "}
            <span className="bg-gradient-to-r from-[#442450] to-[#07a7a7] bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg text-[#9ca3af] max-w-3xl mx-auto leading-relaxed">
            I am an aspiring software engineer who enjoys creating and solving problems with code.
          </p>
        </div>

        {/* Two-Column Layout: Image (left) + Text (right) */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column */}
          <div className="flex justify-center">
            <img
              src="/images/dp.jpg" 
              alt="Profile Picture"
              className="rounded-xl shadow-lg w-full max-w-sm object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">
              The Journey So Far...
            </h3>
            <p className="text-[#9ca3af] mb-4 leading-relaxed">
              Started as a curious community college student exploring the fields of engineering.
              I was drawn to how we can solve math problems with code. Looking deep into the world of
              coding, I found my interest in web and mobile application development, which led me to pursue
              and finish my computer science degree at the University of California, Long Beach.
            </p>
            <p className="text-[#9ca3af] mb-4 leading-relaxed">
              Ever since I was a teenager, I have been drawn to the visual arts, especially through photography and gaming.
              Playing games with immersive worlds and intuitive mechanics sparked my interest in crafting responsive, engaging user experiences.
              At the same time, photography has sharpened my design sense, teaching me how to create visually compelling interfaces that tell a story.
              This passion for visual storytelling continues to influence my approach to UI/UX. I strive to blend creativity with interactivity — building experiences
              that are not only functional, but also emotionally resonant and beautifully designed.
            </p>
            <p className="text-[#9ca3af] leading-relaxed">
              When I am not coding, I am either behind the lens capturing moments or immersed in game worlds for design inspiration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}