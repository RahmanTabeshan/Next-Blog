const RouterPush = (router) => {
    let query ;
    if(router.query.categorySlug === "blogs"){
        const {categorySlug, ...query1} = router.query
        query = query1 ;
    }else{
        query = router.query ;
    }
    
    return router.push(
        {   
            pathname: router.pathname,
            query: query ,
        },
        undefined,
        { scroll: false }
    );
};

export default RouterPush;
