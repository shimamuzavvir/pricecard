import React from 'react';
import './style/price.css';

const PriceCard = ({ arrObj }) => {
    return (
        <div className="price-container">
            <div className="row row-cols-1 row-cols-md-3 cols-md-6 g-6">
                {arrObj.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className='col'></div>
                            <div className="card h-200" id='card'>
                                <div className="card-body">
                                    <h6 className="card-title text-muted text-center">{item.title}</h6>
                                    <h2 className="card-price text-center">{item.price}</h2>
                                    <hr />

                                    <ul className="fa-ul">
                                        <li><span className="fa-li"><i className="fa-solid fa-check"></i></span>{item.user}</li>
                                        <li><span className="fa-li"><i className="fa-solid fa-check"></i></span>50GB Storage</li>
                                        <li><span className="fa-li"><i className="fa-solid fa-check"></i></span>Unlimited Public Project</li>
                                        <li><span className="fa-li"><i className="fa-solid fa-check"></i></span>Community Access</li>
                                        <li className={item.project}><span className="fa-li"><i className={item.proIcon}></i></span>Unlimited Private Project</li>
                                        <li className={item.support}><span className="fa-li"><i className={item.supIcon}></i></span>Dedicated Phone support</li>
                                        <li className={item.domain}><span className="fa-li"><i className={item.domIcon}></i></span>Free subdomain</li>
                                        <li className={item.report}><span className="fa-li"><i className={item.repIcon}></i></span>Monthly Status Report</li>
                                    </ul>
                                </div>
                                <button type="button" className="btn btn-primary" id="btn">BUTTON</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PriceCard;
