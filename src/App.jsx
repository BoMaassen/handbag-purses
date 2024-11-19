import './App.css'
import Button from "./components/Button.jsx";
import handyBag from './assets/bag_1.png';
import stylishBag from './assets/bag_2.png';
import simpleBag from './assets/bag_3.png';
import trendyBag from './assets/bag_4.png';
import ourStory from './assets/our_story.png';
import brand from './assets/brand.png';
import Product from "./components/Product.jsx";
import Tile from "./components/Tile.jsx";

function App() {
    const collection = () => console.log("To the collection");
    const allBags = () => console.log("Shop all bags");
    const preOrder = () => console.log("Pre-orders");

    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                {/*Opdracht 2 buttons*/}
                <Button buttonType="button" buttonClicked={collection} buttonText="to the collection"
                        isDisabled={false}/>
                <Button buttonType="button" buttonClicked={allBags} buttonText="Shop all bags" isDisabled={false}/>
                <Button buttonType="button" buttonClicked={preOrder} buttonText="Pre-orders" isDisabled={true}/>

                {/*  Opdracht 1 buttons
        <button type="button" onClick={collection}>to the collection</button>
        <button type="button" onClick={allBags}>Shop all bags</button>
        <button type="button" disabled onClick={preOrder} >Pre-orders</button>*/}
            </nav>
            <main>
                {/*Opdracht 2 product*/}
                <Product label="Best seller" productImg={handyBag} productName="The handy bag" productPrice={400}/>
                <Product label="Best seller" productImg={stylishBag} productName="The stylish bag" productPrice={250}/>
                <Product label="New collection" productImg={simpleBag} productName="The simple bag" productPrice={300}/>
                <Product label="New collection" productImg={trendyBag} productName="The trendy bag" productPrice={150}/>

                {/*Opdracht 1 Product
              <article>
                  <span>Best seller</span>
                  <img src={handyBag} alt="The handy bag"/>
                  <p>The handy bag</p>
                  <h4>€400,-</h4>
              </article>
              <article>
                  <span>Best seller</span>
                  <img src={stylishBag} alt="The stylish bag"/>
                  <p>The stylish bag</p>
                  <h4>€250,-</h4>
              </article>
              <article>
                  <span>New collection</span>
                  <img src={simpleBag}alt="The simple bag"/>
                  <p>The simple bag</p>
                  <h4>€300,-</h4>
              </article>
              <article>
                  <span>New collection</span>
                  <img src={trendyBag} alt="The trendy bag"/>
                  <p>The trendy bag</p>
                  <h4>€150,-</h4>
              </article>*/}
            </main>
            <footer>
                <Tile variant="tekstTegel" tileHeading="The brand" tileParagraf="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda commodi quisquam repellendus saepe! Accusantium consequatur dolorum eaque eligendi, error iste nam nemo."/>
                <Tile variant="imgTegel" tileImg={brand} tileImgAlt="Our brand"/>
                <Tile variant="imgTegel" tileImg={ourStory} tileImgAlt="Our story"/>
                <Tile variant="Tekst-tegel" tileHeading="The brand" tileParagraf="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda commodi quisquam repellendus saepe! Accusantium consequatur dolorum eaque eligendi, error iste nam nemo."/>

                {/*opdracht 1 tegels
                <section>
                    <h2>The brand</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda commodi quisquam
                        repellendus saepe! Accusantium consequatur dolorum eaque eligendi, error iste nam nemo. </p>
                    <p>
                        nisi pariatur porro, quam ratione tenetur veritatis voluptas voluptatum. A aliquam consectetur
                        dicta dolor ex fuga fugit iste magni quaerat, quos repellat saepe ullam voluptatum. Quia,
                        sequi.</p>
                </section>
                <section>
                    <img src={brand} alt="our brand"/>
                </section>
                <section>
                    <img src={ourStory} alt="our story"/>
                </section>
                <section>
                    <h2>Our story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores consequuntur cumque
                        dolorem doloribus earum eius error et exercitationem explicabo iure, libero maiores maxime,
                        minima nam, natus nesciunt nulla obcaecati quas quasi quod repellat sed sequi vero voluptatibus.
                        Aliquam animi cupiditate neque nisi odit qui ratione, temporibus vel velit voluptatem?</p>
                </section>*/}
            </footer>
        </>
    )
}

export default App
