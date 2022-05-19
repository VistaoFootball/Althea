import React from 'react';
import {dsnCN} from "../../hooks/helper";

function AddressFooter({className, ...restProps}) {
    return (
        <div className={dsnCN('col-address' , className)} {...restProps}>
            <p>
                20 Boulevard de Lyon <br/>
                67000 Strasbourg <br/>
                France
            </p>
        </div>
    );
}

export default AddressFooter;