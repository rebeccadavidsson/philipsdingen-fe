import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./Checkoutform";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PK } from "../utils/urls";
import AddressForm from "./AddressForm";
const stripePromise = loadStripe(STRIPE_PK);

const BuyModal = ({clientSecret, title, price, handleSetModal}) => {

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return <>

        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
            <div className="relative w-auto my-6 mx-auto md:w-7/12">
                {/*content*/}
                <div
                    className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div
                        className="flex justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <div className="w-full"><h3 className="text-3xl font-semibold">
                            {title}
                        </h3>
                        </div>
                        <div><h3 className="text-3xl font-semibold">
                            €{price}
                        </h3>
                        </div>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        >
                                    <span
                                        className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                      ×
                                    </span>
                        </button>
                    </div>
                    <div className="relative p-6 flex-auto">
                        <AddressForm />
                        {clientSecret && (
                            <Elements options={options} stripe={stripePromise}>
                                <CheckoutForm/>
                            </Elements>
                        )}
                    </div>
                    <div
                        className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => handleSetModal(false)}
                        >
                            Sluit
                        </button>

                    </div>
                </div>
            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>;
}
export default BuyModal;