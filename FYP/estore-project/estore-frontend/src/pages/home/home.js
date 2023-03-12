// NOte: Home component...!

import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts, addItemsToCart } from '../../redux/store/actions/auth-actions/auth-actions';

const Home = () => {
    // const [yourCart, setYourCart] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, []);

    const { cartData } = useSelector(({ authStates }) => authStates);
    const { productsList } = useSelector(({ appStates }) => appStates);
    // console.log("Products List: ", productsList);

    const addToCart = (item) => {
        console.log("Item: ", item);
        let hasItemAlreadySelected = false;

        if (cartData.length > 0) {
            for (let i = 0; i < cartData.length; i++) {
                // console.log(cartData[i]);

                if (cartData[i]._id == item._id) {
                    hasItemAlreadySelected = true;
                    break;
                };
            };

            if (!hasItemAlreadySelected) {
                let yourCartClone = [...cartData];
                yourCartClone.push(item);
                dispatch(addItemsToCart(yourCartClone));
            }

            else alert("Item already selected!");
        }

        else {
            let yourCartClone = [...cartData];
            yourCartClone.push(item);
            dispatch(addItemsToCart(yourCartClone));
        }
    };

    return (
        <Fragment>
            <div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <h1> All Products! </h1>
                    <h3 style={{ display: cartData.length > 0 ? "flex" : "none", }}>
                        {`Items: ${cartData.length}`}
                    </h3>
                </div>
                <hr />

                <div style={{ display: "flex", flexDirection: "row" }}>
                    {
                        (productsList?.length > 0)
                            ?
                            (
                                productsList.map((item, index) => {
                                    return (
                                        <div className="card" key={index}>
                                            <img src={item.productImage} className="card-img-top" alt="Fissure in Sandstone" height={'100vh'} width={'40%'} />
                                            <div className="card-body">
                                                <h5 className="card-title"> {item.productName} </h5>
                                                <p className="card-text"> {item.productDescription} </p>
                                                <p className="card-text"> {`PKR: ${item.productPrice}`} </p>
                                                <a
                                                    href="#!"
                                                    className="btn btn-primary"
                                                    onClick={() => addToCart(item)}
                                                >
                                                    + Add to cart
                                                </a>
                                            </div>
                                        </div>
                                    );
                                })
                            )
                            :
                            (<h1> Data Not Found! 😢 </h1>)
                    }
                </div>
            </div>
        </Fragment>
    );
};

export default Home;