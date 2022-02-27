import NextImage from "./Image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="flex justify-between m-6">
      <p className="text-xs font-semibold text-gray-600">
        Philip Davidsson - 2022
      </p>
      <div className="flex gap-3 ml-4">
        <Link href="/" className="max-w-xs ml-4" passHref>
          <NextImage src="/twitter.svg" width={20} height={20} alt="Twitter" />
        </Link>
        <Link href="/" className="ml-3" passHref>
          <NextImage
            src="/facebook.svg"
            width={20}
            height={20}
            alt="Facebook"
          />
        </Link>
        <Link href="/" className="ml-3" passHref>
          <NextImage src="/github.svg" width={20} height={20} alt="GitHub" />
        </Link>
      </div>
    </div>
  )
}

export default Footer
