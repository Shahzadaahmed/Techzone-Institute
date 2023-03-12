import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MDBBtn } from 'mdb-react-ui-kit';
import { clearCart, deleteCartItem } from '../../redux/store/actions/auth-actions/auth-actions';
import axios from 'axios';

const YourCart = () => {

    const dispatch = useDispatch();
    const { authenticatedUser, cartData } = useSelector(({ authStates }) => authStates);
    console.log("Userrr: ", authenticatedUser);
    // console.log("Your Cart: ", cartData);

    const placeAnOrder = async () => {
        if (!authenticatedUser) alert("Please login first!");

        else {
            try {
                let res = await axios({
                    url: "http://192.168.2.45:3005/create-checkout-session",
                    method: "POST"
                });
                console.log('Payment res: ', res);
                if (res.status == 200) {
                    window.location = res.data.url;
                }
            }

            catch (error) {
                console.log('Error occured while payment integration: ', error);
            };
        };
    }

    return (
        <div>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <h1> Your Cart! </h1>

                <MDBBtn onClick={() => dispatch(clearCart())}>
                    Clear Cart
                </MDBBtn>
            </div>

            <div style={{ display: "flex", flexDirection: "row" }}>
                {
                    (cartData.length > 0)
                        ?
                        (
                            cartData.map((item, index) => {
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
                                                onClick={() => dispatch(deleteCartItem(index))}
                                            >
                                                Delete
                                            </a>
                                        </div>
                                    </div>
                                );
                            })
                        )
                        :
                        (<h1> No Items Selected 😢 </h1>)
                }
            </div>

            <hr />
            <MDBBtn
                style={{ backgroundColor: "blue" }}
                disabled={cartData.length > 0 ? false : true}
                onClick={placeAnOrder}
            >
                Place Order
            </MDBBtn>
        </div>
    );
};

export default YourCart;