

const BannerSection = () => {
  return (
    <div className="container pt-16">
        <div className="grid sm:grid-clos-2 gap-4 sm:gap-8">
            <div className="overflow-hidden rounded-lg">
                <img
                className="hover:scale-105 transition-transform"
                src="/public/image/banner__1.webp" alt="banner"/>

            </div>
            <div className="overflow-hidden rounded-lg">
             <img
                className="hover:scale-105 transition-transform"
                src="/public/image/banner__2.webp" alt="banner"/>

            </div>

        </div>

    </div>
  )
}

export default BannerSection