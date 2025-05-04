import React from "react";
import http from "./AxiosConfig";
import AppLoading from "../../components/common/loading/AppLoading";

const {useState, useCallback, useMemo, useEffect} = React;
const useAxiosLoader = () => {
    const [counter, setCounter] = useState(0);

    const inc = useCallback(() => setCounter(counter => counter + 1), [
        setCounter
    ]); // add to counter
    const dec = useCallback(() => setCounter(counter => counter - 1), [
        setCounter
    ]); // remove from counter

    const interceptors = useMemo(
        () => ({
            request: (config: any) => {
                inc();
                return config;
            },
            response: (response: any) => {
                dec();
                return response;
            },
            error: (error: any) => {
                dec();
                return Promise.reject(error);
            }
        }),
        [inc, dec]
    );

    useEffect(() => {
        // add request interceptors
        http.interceptors.request.use(interceptors.request, interceptors.error);
        // add response interceptors
        http.interceptors.response.use(interceptors.response, interceptors.error);
        return () => {
            // remove all intercepts when done
            // @ts-ignore
            http.interceptors.request.eject(interceptors.request);
            // @ts-ignore
            http.interceptors.request.eject(interceptors.error);
            // @ts-ignore
            http.interceptors.response.eject(interceptors.response);
            // @ts-ignore
            http.interceptors.response.eject(interceptors.error);
        };
    }, [interceptors]);

    return [counter > 0];
};

const GlobalLoader = () => {
    const [loading] = useAxiosLoader();
    return <>{loading ? <AppLoading/> : null}</>;
};

export default GlobalLoader;