import "./Home.css"

function Home() {
  return (
    <div className="min-h-screen w-full relative">
  {/* Radial Gradient Background from Bottom */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)",
    }}
  />

   <div>
      <h1>Showing Emojis Using Use State</h1>
    </div>

</div>

  );
}

export default Home
