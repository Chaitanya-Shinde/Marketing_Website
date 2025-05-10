// src/components/Hero.jsx
const Hero = () => {
  return (
    <section className=" relative w-screen h-screen  flex flex-col justify-center items-center text-center bg-gray-500 text-white ">
      <img src="src\assets\hero2.jpg" className=" w-full h-full object-cover"/>
      <div className=" absolute w-full h-auto md:h-full top-20 md:top-15 px-10 md:px-20 flex flex-col items-center justify-start md:justify-between pb-20">
        <p className=" text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-shadow-sm text-shadow-gray-900 ">Sell Your Unused Software Licenses Effortlessly</p>
        <div className="h-[350px] flex flex-col justify-between items-center ">
          <p className="text-lg md:text-xl mb-6 font-medium text-shadow-sm text-shadow-gray-900">Turn your unused software into cash with SoftSell’s fast, secure resale platform.</p>
          <button className="bg-[#E8C999] text-black w-max px-6 py-3 rounded-full font-semibold hover:bg-[#f2d9b3] hover:cursor-pointer transition">
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
