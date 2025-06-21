import LiquidGlass from "liquid-glass-react";

export default function Navbar() {
  return (
    <LiquidGlass
      displacementScale={64}
      blurAmount={0.1}
      saturation={130}
      aberrationIntensity={2}
      elasticity={0.35}
      cornerRadius={100}
      padding="8px 16px"
      onClick={() => console.log("Button clicked!")}
    >
      <span className="text-white font-medium">Click Me</span>
    </LiquidGlass>
  );
}
