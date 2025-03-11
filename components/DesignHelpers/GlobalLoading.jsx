"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LoadingCircle from './LoadingCircle'

const GlobalLoading = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleRouteChangeStart = () => setLoading(true);
        const handleRouteChangeComplete = () => setLoading(false);
        const handleRouteChangeError = () => setLoading(false);

        router?.events?.on("routeChangeStart", handleRouteChangeStart);
        router?.events?.on("routeChangeComplete", handleRouteChangeComplete);
        router?.events?.on("routeChangeError", handleRouteChangeError);

        return () => {
            router?.events?.off("routeChangeStart", handleRouteChangeStart);
            router?.events?.off("routeChangeComplete", handleRouteChangeComplete);
            router?.events?.off("routeChangeError", handleRouteChangeError);
        };
    }, [router]);

    return (
        loading ?
            <div className='w-screen h-screen z-50 bg-primary-1 flex justify-center items-center'>
                <LoadingCircle />
            </div>
            : null
    )
}

export default GlobalLoading