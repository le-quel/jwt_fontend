import { useEffect } from "react";
import { useNavigate, Route } from "react-router-dom";

const PrivateRoutes = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        let session = sessionStorage.getItem("account");
        if (!session) {
            navigate('/login');
        }
    }, [navigate]);

    return (

        <Route path={props.path} element={props.element} />

    );
};

export default PrivateRoutes;
