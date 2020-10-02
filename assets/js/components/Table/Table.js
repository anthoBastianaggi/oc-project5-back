import React from 'react';
import './Table.module.scss';
import PropTypes from 'prop-types';
import cs from 'classnames';
    
const Table = ({ columns, data }) => {
    return (
        <div className="table-container">
            <table className="table">
                <thead className="table-head">
                    <tr className="table-row">
                        <th className={cs("header-cells", "checkbox")}>
                            <input type="checkbox" />
                        </th>
                    {columns.map(({ id, name, slug }) => (
                        <th key={id} className={cs("header-cells", slug)}>{name}</th>
                    ))}     
                    </tr>  
                </thead>
                <tbody className="table-body">
                    {data.map(({ id, name, slug }) => (
                    <tr className="table-row" key={id}>
                        <td className={cs("data-cells", "checkbox")}>
                            <input type="checkbox" />
                        </td>
                        <td className={cs("data-cells", slug)}>
                            <span className="item">{name}</span>
                            <div className="actions">
                                <div className="update">
                                    <span>Modifier</span>
                                </div>
                                <div className="delete">
                                    <span>Supprimer</span>
                                </div>
                            </div>
                        </td>
                        <td className={cs("data-cells", slug)}>
                            <span className="item">{slug}</span>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

Table.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array
}
    
export default Table;