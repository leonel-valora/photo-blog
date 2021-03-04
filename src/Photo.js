function Photo(props) {
    return (
        <div>
            <img src={props.image} alt={props.title}/>
        </div>
    );
}
export default Photo;