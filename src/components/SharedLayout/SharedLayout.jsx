import { Suspense } from "react";
// import Header from '../Header/Header';
import Header from "components/Header/Header";
import css from './SharedLayout.module.css'
import { Outlet } from "react-router-dom";
export default function SharedLayout() {
    return (
        <div className={css.wrapper}>
            <Header /> 
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
            </div>
            )}

