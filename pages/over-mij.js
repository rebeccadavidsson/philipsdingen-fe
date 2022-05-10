const AboutPage = () => {

  return (
    <>
      <div className="container mx-auto pt-24">
        <div>
          <div className="grid-cols-1 md:flex md:grid-cols-2 relative gap-4">
            <div className="md:hidden w-full md:w-2/3 justify-right relative flex-col ">
              <img
                  src="https://res.cloudinary.com/dsbvl9mtl/image/upload/v1651395255/philip_zizmok.jpg"
                  alt="philip"
                  className="rounded justify-right"
              />
            </div>
            <div className="flex flex-col w-full lg:w-2/5 p-4">
              <p className="text-2xl md:text-3xl font-bold text-zinc-900 leading-relaxed md:leading-snug">
                Philip Davidsson
              </p>
              <p className="font-sans text-sm md:text-md my-2 md:my-3 text-gray-700">
                <svg
                  className="inline-block fill-current mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                </svg>
                Hilversum
              </p>
              <p className="font-sans text-sm md:text-md my-2 md:my-3 text-gray-700">
                <svg
                  className="inline-block fill-current mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
                </svg>{" "}
                davidssonphilipjohan@gmail.com
              </p>
              <p className="font-sans text-sm md:text-md my-2 md:my-4 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="hidden md:block w-full md:w-2/3 justify-right relative flex-col ">
                <img
                  src="https://res.cloudinary.com/dsbvl9mtl/image/upload/v1651395255/philip_zizmok.jpg"
                  alt="philip"
                  className="rounded justify-right"
                />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AboutPage
