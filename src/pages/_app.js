import { loadUser } from "@/redux/user/userActions";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { wrapper } from "src/redux/Store";
import "../../styles/globals.css";

function App({ Component, pageProps }) {
    const { store, props } = wrapper.useWrappedStore(pageProps);

    useEffect(()=>{
        loadUser(store) ;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (
        <Provider store={store}>
            <Component {...props} />
        </Provider>
    );
}

export default App;
