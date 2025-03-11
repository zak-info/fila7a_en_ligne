
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Img = ({ img , width,height }) => {
    
    return (
        <>
            
            <LazyLoadImage
                alt={"comment"}
                height={height}
                src={img} 
                effect="blur"
                width={width} />
        </>
    )
}

export default Img