import {Card} from 'react-bootstrap' 
import Rating from './Rating' 

const Product = ({ product }) => {
    return (
        <Card className='my-2 p-3 rounded'>
            
            <a href={`/product/${product._id}`}>
                <Card.Img src ={product.image} variant='top' />
            </a>

            <Card.Body>
            <a href={`/product/${product._id}`}>
                <Card.Title as ='div'><strong>{product.name}</strong></Card.Title>
            </a>
            </Card.Body> 

            <Card.Text as='div' style={{marginBottom:'10px'}}>
                <Rating value ={product.rating} text= {`${product.numberReviews } reviews`} />
            </Card.Text>
            <Card.Text as ='h4'><span>&#8358;</span>{product.price}</Card.Text>
        </Card> 
    )
}

export default Product
