export default function AboutLayout({
  children,
  founder,
  team,
  projects,
  achievements,
  leaders,
}) {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl">
        {children}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {founder}
          {team}
          {projects}
          {leaders}
          {achievements}
        </div>
      </div>
    </main>
  );
}
