import { RatingProps } from './rating.props';
import styles from './rating.module.css';
import cn from 'classnames'
import { useEffect, useState } from 'react';
import StarIcon from './star.svg'
const Rating = ({rating, isEditabled = false, setRating, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    useEffect(() => {
        renderRating(rating)
    }, [rating])

    const renderRating = (currentRating: number) => {
        const updateArray = ratingArray.map((r: JSX.Element, index: number) => (
            <span className={cn(styles.star, {
                [styles.filled]: index < currentRating,
                [styles.editable]: isEditabled,
            })}
            onMouseEnter={() => changeRatingDisplay(index + 1)}
            onMouseLeave={() => changeRatingDisplay(rating)}
            onClick={() => clickRatingHandler(index + 1)}
            ><StarIcon/></span>
        ))
        setRatingArray(updateArray)
    }

    const changeRatingDisplay = (index: number) => {
        if (!isEditabled) {
            return;
        }

        renderRating(index)
    }

    const clickRatingHandler = (index: number) => {
        if(!isEditabled || !setRating){
            return
        }
        
        setRating(index)
    }
  return (
    <div className={styles.rating} {...props}>
        { ratingArray.map((rating, index) => (
            <span key={index}>{rating}</span>
        ))}
    </div>
  )
}

export default Rating