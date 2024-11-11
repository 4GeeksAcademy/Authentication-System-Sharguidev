import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext, useEffect } from "react";

export const Private = () => {


    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        if (!store.token) {
            navigate("/login");
        }
    }, []);

    return (
        <div className="text-center mt-5">
            <h1>Private</h1>
        </div>
    );
}