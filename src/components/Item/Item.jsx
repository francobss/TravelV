import "./Item.css"

export const Item = ({item}) => {
    return(
            <div className="places">
                <h2>{item.name}</h2>
                <img className="imagen" src={item.img} />
                {/* <img src="#" style="width: 300px; height: 250px; border-radius: 12px;"> */}
                <br/>
                <br/>
                <a className="btn btn-secondary btn-lg" href="#">Book Now 15% OFF</a>
            </div>
    )
}