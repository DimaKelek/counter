import React from "react";
import S from "./Header.module.css"

type HeaderPropsType = {
    title: string
}

export function Header(props: HeaderPropsType) {
    return (
        <div>
            <div className={S.header}>{props.title}</div>
        </div>
    );
}