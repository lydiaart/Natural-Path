function DropDown() {
    return (
        <>
            <div class="dropdown">
                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Select a category
                    
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a href="#">Skin Care Products</a></li>
                    <li><a href="#">Herb Teas</a></li>
                    <li><a href="#">Natural Ointments</a></li>
                </ul>
            </div>
        </>
    )

}

export default DropDown;