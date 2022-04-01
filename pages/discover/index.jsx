//view
import DiscoverPageView from '../../src/views/DiscoverPageView'
import { useRouter } from 'next/dist/client/router'
const discover = () => {
    const router = useRouter()

    if (router.isReady && router.asPath === '/discover') {
        router.push('/discover/movie?page=1')
    }

    return (
        <DiscoverPageView />
    )
}

export default discover