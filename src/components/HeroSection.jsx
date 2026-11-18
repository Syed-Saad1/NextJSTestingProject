export function HeroSection() {
  return (
    <div className="bg-[url(/Products/image.png)] relative bg-cover bg-no-repeat h-100 w-full">
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 flex items-start justify-between">
        <h1>Hero Section</h1>
        <img src="/Products/men.png" className="size-74 bg-cover" alt="" />

        <img
          className="size-88"
          src="https://images.pexels.com/photos/36966213/pexels-photo-36966213.jpeg"
          alt=""
        />
      </div>{" "}
    </div>
  );
}
