import Link from "next/link"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const CategoryButtons = ({categories = []}) => {

    const [activeCategory, setActiveCategory] = useState('');
    const router = useRouter()

    useEffect(() => {
        const path = router.asPath;
        if (path && path.includes('categories')) {
            const splitPath = path.split('/');
            if (splitPath) {
                setActiveCategory(router.asPath.split('/')[2]);
            }
        }
    });

    if (categories.length <= 0) {
        categories = [
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


    function getHref(_category) {
        return activeCategory === _category.slug ? '/galerij' : `/categories/${_category.slug}`;
    }

    return (
        <div className="container flex flex-wrap mx-auto gap-2 md:mt-8 justify-center">
            {categories.map((_category) => (
                <Link href={getHref(_category)}
                      key={_category.id}>
                    <a
                        onClick={() => setActiveCategory(_category.slug)}
                        className={"px-4 py-2 bg-transparent font-bold text-zinc-700 rounded underline-animation " + (activeCategory === _category.slug && 'underline')}>
                        {_category.name}
                    </a>
                </Link>
            ))}
        </div>
    )

}

export default CategoryButtons
