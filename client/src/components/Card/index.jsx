function Card(){
    return (
        <>
         <div class="card">
            <img class="card-img-top" src="//placeimg.com/280/180/tech" alt="Card image cap" />
            <div class="card-body">
               <h5 class="card-title border-bottom pb-3">Card title <a href="#" class="float-right btn btn-sm btn-info d-inline-flex share"><i class="fas fa-share-alt"></i></a></h5>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" class="btn btn-sm btn-info float-right">Read more <i class="fas fa-angle-double-right"></i></a>
            </div>
         </div>
        </>
    )
}

export default Card;