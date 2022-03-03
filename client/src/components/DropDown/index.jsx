 
import './index.css';
import {useState} from 'react' 
function DropDown({categories,setCategory}) {
    

 
    return (
        <>

        <select onChange={(event)=>setCategory(event.target.value)}  >
             { categories.map((category, i) => {
                        return (
                            <option key={i} value={category._id}> {category.name}</option>
                        )
                    })}
        </select>
            {/* <select className="selectpicker" onChange={handleClick} data-style="btn-info" multiple data-max-options="3" data-live-search="true">
                <optgroup label="Category">
                    { list.map((category, i) => {
                        return (
                            <option key={i} value={category._id}> {category.name}</option>
                        )
                    })}
                </optgroup>

                 
            </select> */}



        </>
    )

}

export default DropDown;