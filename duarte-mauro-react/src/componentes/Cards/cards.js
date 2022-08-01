import './cards.css';

export default function Card (props) {
    return (
        <div className={`card-cmp ${ props.isproduct ? 'product-card' : ''}`}>
            { props.children }
        </div>
    );
}