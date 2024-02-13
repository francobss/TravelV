import imagen1 from "../assets/img1.png"
import imagen2 from "../assets/img2.png"
import imagen3 from "../assets/img3.png"
import { ItemList } from "../ItemList/ItemList"
import "./ItemListContainer.css"


export const ItemListContainer = () => {
    
    const products = [
        {
            name:"Australia",
            img: imagen1,
        },
        {
            name:"New York",
            img: imagen2,
        },
        {
            name:"Thailand",
            img: imagen3,
        }
    ]
    
    return( 
        <div className="body">
            <div className="heading">
                <h1>Travel With Us</h1>
                <br/>
                <p>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. </p>
                <br/>
                <br/>
                <a href="#">Learn More</a>
            </div>
            <ItemList items={products}/>
        </div>
    )
}