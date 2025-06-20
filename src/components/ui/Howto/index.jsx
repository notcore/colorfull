import { HoverEffect } from "@/components/ui/card-hover-effect";
 
 const projects = [
  {
    id:1,
    title: "1. Explain",
    description:
      "Jelaskan kebutuhanmu dengan jelas agar kami tau kebutuhanmu.",
    link: " ",
  },
  {
    id:2,
    title: "2. Concept ( opsional )",
    description:
      "Berikan kami refrensi atau konsep yang kamu inginkan dan beri tau kami format apa yang kamu inginkan .",
    link: " ",
  },
  {
    id:3,
    title: "3. Confirm",
    description:
      "preview hasil dan kesempatan untuk merevisi hasil sebelum dealing dan pembayara.",
    link: " ",
  },
  {
    id:4,
    title: "4. Pengiriman",
    description:
      "mengirim hasil design setelah dealing dan project dihentikan .",
    link: " ",
  },
  {
    id:5,
    title: "5. Done",
    description:
      "Selesai, dapatkan bonus atau hadiah dari kami jika kamu memilih tier standa.",
    link: " ",
  }, 
  {
    id:6,
    title: "Coba sekarang ",
    description:
      "ayo scroll kebawah untuk melihat tier, jangan ragu untuk membeli harga rendah maupun tinggi karena kualitas terbaik tetap kami utamakan.",
    link: " ",
  }, 
];

export default function Howto() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
