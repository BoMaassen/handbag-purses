function Tile({variant, tileHeading, tileImg, tileImgAlt, children}) {

    function TileContent() {
        if (variant === 'imgTegel') {
            return <img src={tileImg} alt={tileImgAlt}/>
        } else return <>
            <h2>{tileHeading}</h2>
            {children}
        </>
    }

    return (
        <section>
            {TileContent()}
        </section>
    );
}

export default Tile;