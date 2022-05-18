import React from 'react'

import './style.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import DsnGrid, {DsnGridProps} from "../DsnGrid";
import {dsnCN} from "../../hooks/helper";
import LazyImg from "../LazyImg";

const BrandDetails = [
    {
        src: "Althea/assets/img/logo/7.png",
        title: "React Native",
    },
    {
        src: "Althea/assets/img/logo/8.png",
        title: "Ios",
    },
    {
        src: "Althea/assets/img/logo/9.png",
        title: "Ionic",
    },
    {
        src: "Althea/assets/img/logo/10.png",
        title: "Android",
    },
    {
        src: "Althea/assets/img/logo/11.png",
        title: "Flutter",
    },
    {
        src: "Althea/assets/img/logo/12.png",
        title: "Xamarin",
    },
    {
        src: "Althea/assets/img/logo/13.png",
        title: "Kotlin",
    },
]

function BrandClient({className, ...restProps}: DsnGridProps) {

    return (
        <DsnGrid className={dsnCN('wrapper-brand', className)} {...restProps}>
            {BrandDetails.map(
                (item, index) => {
                    return (
                        <div key={index} className="brand-item background-section">
                            <div className="box-img">
                                <LazyImg src={item.src} alt=""/>
                            </div>
                            <div className="info">
                                <div className="content">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </div>

                                    <div className="entry">
                                        <div>
                                            <h5 className='mb-20'>
                                                {item.title}
                                            </h5>
                                            <a href={item.href} target="_blank" rel="noopener noreferrer">
                                                {item.linkText}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
            )}
        </DsnGrid>

    )
}

export default BrandClient
