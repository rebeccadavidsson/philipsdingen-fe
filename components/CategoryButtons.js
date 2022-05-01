import Link from "next/link"

const CategoryButtons = ({ categories = [] }) => {

  if (categories.length <= 0) {
    categories = [
      {
        slug: 'kleur',
        name: 'Kleur',
        id: 9
      },
      {
        slug: 'schilderij',
        name: 'Schilderij',
        id: 8
      },
      {
        slug: 'tekening',
        name: 'Tekening',
        id: 10
      },
    ];
  }

    return (
      <div className="container flex flex-wrap mx-auto gap-2 mt-8 justify-center">
        {categories.map((_category) => (
          <Link href={`/categories/${_category.slug}`} key={_category.id}>
            <a
              className="px-4 py-2 bg-transparent font-bold text-white bg-yellow-500 rounded hover:bg-yellow-600 focus:outline-none focus:shadow-outline">
              {_category.name}
            </a>
          </Link>
        ))}
      </div>
    )
  
}

export default CategoryButtons
