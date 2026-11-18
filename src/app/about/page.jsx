import { HeroSection } from "@/components/HeroSection";

export default function AboutPage() {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-gray-900">About Our Company</h1>

      <p className="mt-3 text-gray-600">
        Learn more about our founder, team, projects, and achievements.
      </p>
      <HeroSection />
    </div>
  );
}
