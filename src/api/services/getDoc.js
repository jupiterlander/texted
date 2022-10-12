const DOC_SERVER = process.env.REACT_APP_DOC_SERVER;

const getDoc = async id => {
    try {
        const res = await fetch(
            `${DOC_SERVER}/docs/find/${id}`,
            {
                method: "GET",
                headers: {
                    'x-access-token': sessionStorage.getItem('token')
                },
                credentials: "include",
                mode: "cors",
            },
        );

        const result = await res.json();

        result.status = res.status;
        return result;
    } catch (e) {
        console.log("fetch-error", e);
    }
};

export default getDoc;



