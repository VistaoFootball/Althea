import React from 'react';
import NextPage from "./NextPage";
import { useTranslation } from "react-i18next";

function NextPageContent({...restProps}) {
    const { t } = useTranslation();
    return (
        <NextPage to="/contact"  text={t("we-are-hiring-1")} {...restProps}>
            {t("we-are-hiring")}
        </NextPage>
    );
}

export default NextPageContent;