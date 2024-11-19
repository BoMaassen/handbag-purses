function Tile({variant, tileHeading, tileParagraf, tileImg, tileImgAlt}) {
    if (variant === 'tekstTegel') {

    }
    else if (variant === 'imgTegel'){

    }
    return (


            <section>
                <h2>{tileHeading}</h2>
                <p>{tileParagraf}</p>
            </section>

            <section>
                <img src={tileImg} alt={tileImgAlt}/>
            </section>


    )
        ;
}

export default Tile;