import React from 'react';
import {dsnCN} from "../../hooks/helper";

function Copyright({className, ...restProps}) {
    return (
        <div className={dsnCN('copyright', className)} {...restProps}>
            <div className="text-center">
                <p>© {new Date().getFullYear()} Althea Corp.</p>
                <div className="copyright-text over-hidden">

                </div>
            </div>
        </div>
    );
}

export default Copyright;