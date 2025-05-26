function Hero(props) {
  const {
    image,
    title,
    sub,
    description,
    children,
    brightness,
  } = props;

  return (
    <div className="relative w-full">
      <img
        src={image}
        alt="Gambar"
        className={`w-full h-screen lg:h-auto object-cover ${brightness}`}
      />
      <div className="absolute inset-0 px-4 md:px-0 flex flex-col gap-5 items-center mx-auto justify-center w-full md:w-[827px]">
        <h1 className="text-4xl md:text-[50px] font-bold tracking-[-0.7px] text-center text-white">
          {title}
        </h1>
        <p className="text-[50px] md:text-base font-bold text-white">{sub}</p>
        <p className="text-sm md:text-base text-white text-center w-full md:w-[700px]">
          {description}
        </p>

        {children}
      </div>
    </div>
  );
}

export default Hero;
