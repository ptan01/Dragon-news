import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaEye , FaStar , FaRegStar} from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
   
    const { _id, title, details, author, others_info, rating, total_view, image_url } = news;

    return (
        <Card className=" mb-2">
            <Card.Header className='d-flex'>
                <Image style={{ width: '50px', height: '50px' }} src={author.img} roundedCircle fluid />
                <div className='flex-grow-1'>
                    <p className='mb-0'>{author.name ? author.name : 'Author name not avilable'}</p>
                    <p className='mb-0'>{moment(author.published_date).format('YYYY-MM-D')}</p>
                </div>
                <div >
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>

                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    <p>{details.length > 250 ? details.slice(0, 250) : details}...<Link to={`/news/${_id}`}>Read More</Link></p>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center">
                <div className='flex-grow-1 d-flex align-items-center'>
                    <p className='mb-0 me-2'>{rating?.number}</p>
                    <Rating
                    readonly
                        placeholderRating={rating?.number}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                </div>
                <div className='d-flex'>
                    <p className='mb-0 me-2'>{total_view}</p>
                    <FaEye></FaEye>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;