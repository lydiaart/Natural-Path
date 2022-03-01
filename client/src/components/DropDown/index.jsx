import { QUERY_CATEGORIES } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import './index.css';

function DropDown() {
    const { loading, data } = useQuery(QUERY_CATEGORIES)
    const categories = data?.categories || []
    console.log(loading, data)
    return (
        <>
            <select class="selectpicker" data-style="btn-info" multiple data-max-options="3" data-live-search="true">
                <optgroup label="Category">
                    {loading ? "still loading.." : categories.map(category => {
                        return (
                            <option value={category._id}> {category.name}</option>
                        )
                    })}
                </optgroup>

                <optgroup label="Category">
                    <option>Skin Care Products</option>
                    <option>Herb Teas</option>
                    <option>Ointments</option>
                </optgroup>
                
            </select>




        </>
    )

}

export default DropDown;