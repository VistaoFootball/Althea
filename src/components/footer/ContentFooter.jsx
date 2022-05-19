import React from 'react';
import {dsnCN} from "../../hooks/helper";

function ContentFooter({className, ...restProps}) {
    return (
        <div className={dsnCN('col-menu' ,className)} {...restProps}>
            <p>
                althea.info@gmail.com
            </p>
        </div>
    );
}

export default ContentFooter;