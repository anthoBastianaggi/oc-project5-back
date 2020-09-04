import React, { cloneElement } from 'react';
import './List.module.scss';
    
const List = ({ data, children }) => {
    return (
        <div className="list">     
            {cloneElement(children, {
                className: children.props.className,
            })}
            <div className="list-body">
                <div className="list-body-container">
                {data.map((item) => (
                    <div key={item.id} className="list-box">
                        <div className="list-item title">
                            <span className="item">{item.title}</span>
                            <div className="actions">
                                <div className="update">
                                    <span>Modifier</span>
                                </div>
                                <div className="delete">
                                <span>Supprimer</span>
                            </div>
                            </div>
                        </div>
                        {item.category ? (
                            <div className="list-item category">
                                <span className="item">{item.category}</span>
                            </div>
                        ) : ""}
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}
    
export default List;