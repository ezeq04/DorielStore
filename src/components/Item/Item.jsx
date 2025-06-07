import './item.scss';

function item({price, title, text, img}){
    


    return(
        <div className="card">
            <div className="cardImageContainer">
                <img src={img} className="card-image" width="150" height="150" alt="product img" />
            </div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{text}</p>
                <div>
                <p className="card-price">{price}</p>
                </div>
                <div className='card-footer'>
                    <button className="card-button"> Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
};

export default item;