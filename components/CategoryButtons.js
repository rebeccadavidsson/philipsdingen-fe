import Link from "next/link"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const CategoryButtons = ({categories = []}) => {

    const [activeCategory, setActiveCategory] = useState('');
    const router = useRouter()

    useEffect(() => {
        setActiveCategory(router.asPath.split('/').at(-1));
    });

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
            {
                slug: 'alles',
                name: 'Alles',
                id: 11
            },
        ];
    }


    function getHref(_category) {
        const galleryUrl = '/galerij';
        if (_category.slug === 'alles') {
            return galleryUrl;
        }
        return activeCategory === _category.slug ? '/galerij' : `/categories/${_category.slug}`;
    }

    return (
        <div className="container flex flex-wrap mx-auto gap-2 mt-8 justify-center">
            {categories.map((_category) => (
                <Link href={getHref(_category)}
                      key={_category.id}>
                    <a
                        onClick={() => setActiveCategory(_category.slug)}
                        className={"px-4 py-2 bg-transparent font-bold text-white bg-yellow-500 rounded hover:bg-yellow-600 focus:outline-none focus:shadow-outline " + (activeCategory === _category.slug && 'bg-yellow-600')}>
                        {_category.name}
                    </a>
                </Link>
            ))}
        </div>
    )

}

export default CategoryButtons
