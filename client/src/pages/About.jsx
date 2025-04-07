// About Page
export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">
        About Homesphere
      </h1>
      <p className="mb-4 text-slate-700">
        Homesphere is your trusted digital companion for discovering, buying,
        selling, and renting properties with ease. Designed for modern
        homeowners, renters, and investors, Homesphere brings the entire real
        estate journey under one seamless and user-friendly platform.
      </p>
      <p className="mb-4 text-slate-700">
        We believe finding a place to live should feel exciting, not
        overwhelming. That’s why our mission is to simplify the real estate
        experience through smart tools, personalized recommendations, and a deep
        understanding of what makes a place feel like home.
      </p>
      <p className="mb-4 text-slate-700">
        Backed by a passionate development team and built using the powerful
        MERN stack, Homesphere blends cutting-edge technology with human-centric
        design. Whether you're searching for your first apartment or listing
        your dream home, we're here to make every step smooth and rewarding.
      </p>
      <div className="mt-10">
        <p className="text-slate-600">
          <strong>By:</strong> Tanishk Vaze <br />
          <strong>Roll No:</strong> 1032222116, G3 <br />
          <strong>Project:</strong> MERN Stack Project for FSD
        </p>
        <img
          src="/Tanishk.png" // Replace this with your actual image path
          alt="Tanishk Vaze"
          className="mt-4 w-32 h-32 rounded-full object-cover border-2 border-slate-400"
        />
      </div>
    </div>
  );
}
