import NavigationFooter from "../container/NavigationFooter"
import MoviePage from "../components/MoviePage"

const MoviePageView = () => {
    return (
    <div className="relative bg-slate-200">
        <NavigationFooter>
            <div className="pb-20 pt-2 sm:pt-8 md:pt-10 xl:px-5">
                <div className="w-full mx-auto px-2 lg:px-5 xl:max-w-[1320px] xl:px-0">
                    <div className="flex justify-between gap-8">
                        <MoviePage />
                    </div>
                </div>
            </div>
        </NavigationFooter>
    </div>
    )
}

export default MoviePageView