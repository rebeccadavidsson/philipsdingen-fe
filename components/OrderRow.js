import { Component } from "react";
import NextImage from "./Image";
import BuyButton from "./BuyButton";

class OrderRow extends Component {
    render() {
        return <div className={this.props.paid ? 'opacity-order' : ''}>
            {this.props.paid && <h3 className="title-large">Your order history</h3>}
            <div className="flex flex-row justify-between">
                <p className="mr-1 font-bold text-gray-900">Order date</p>
                <p className="text-gray-500 mb-4"> {new Date(this.props.order.created_at).toLocaleDateString("nl-NL")}{" "}</p>
            </div>
            {this.props.paid && <div className="flex flex-row justify-between">
                <p className="mr-1 font-bold text-gray-900">Paid at</p>
                <p className="text-gray-500 mb-4"> {new Date(this.props.order.published_at).toLocaleDateString("nl-NL")}{" "}</p>
            </div>}

            <div className="p-6 m-auto h-full w-full flex mb-8 mt-4 rounded-xl bg-stone-100">
                <div className="w-1/2 rounded mr-6">
                    <NextImage media={this.props.order.product.image} width={40} height={40}/>
                </div>
                <div className="w-full text-left">
                    <h4 className="font-semibold text-lg leading-tight truncate text-gray-700 flex justify-between">
                        <p className="font-bold text-gray-900">{this.props.order.product.title}</p>
                        <p className="text-gray-500"> € {this.props.order.product.price}</p>
                    </h4>
                    <div className="mt-1 text-gray-600 mb-2">{this.props.order.product.description}</div>
                </div>
            </div>

            <div className="flex flex-row justify-between mt-6 text-lg">
                <p className=" mr-1 font-bold text-gray-900 font-black">Total</p>
                <p className="text-gray-800 mb-3 font-black">€ {this.props.order.Total}</p>
            </div>
            {!this.props.paid &&
                <BuyButton product={this.props.order.product}/>
            }
            {this.props.orders.length > 1 && <hr className="mt-4 mb-4"/>}
        </div>;
    }
}
export default OrderRow;