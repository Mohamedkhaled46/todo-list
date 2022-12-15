import React from "react";
import './todoitems.css';

const Todoitems = (props) => {
    const { items, deleteItems } = props;
    let length = items.length;
    const Listitems = length ? (
        items.map(it => {
            return (
                <div key={it.id} >
                    <div className="name">{it.name}</div>
                    <div className="age">{it.age}</div>
                    <div className="action icon" onClick={() => deleteItems(it.id)}>&times;</div>
                </div>

            )
        })
    ) : (<p>there is no item to show</p>)


    return (

        <div className="Listitem">
            <div>
                <span className="name title">name</span>
                <span className="age title">age</span>
                <span className="action title ">Action</span>
            </div>
            <div>{Listitems}</div>

        </div>
    )

}
export default Todoitems;