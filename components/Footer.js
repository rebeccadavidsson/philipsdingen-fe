import NextImage from "./Image"

const Footer = () => {
  return (
    <div className="flex justify-between m-6">
      <p className="text-xs font-semibold text-gray-600">
        Philip Davidsson - 2022
      </p>
      <div className="flex gap-3 ml-4">
        <a href="/" className="max-w-xs ml-4">
          <NextImage src="/twitter.svg" width={20} height={20} alt="Twitter" />
        </a>
        <a href="/" className="ml-3">
          <NextImage
            src="/facebook.svg"
            width={20}
            height={20}
            alt="Facebook"
          />
        </a>
        <a
          href="/"
          className="ml-3"
        >
          <NextImage src="/github.svg" width={20} height={20} alt="GitHub" />
        </a>
      </div>
    </div>
  )
}

export default Footer
