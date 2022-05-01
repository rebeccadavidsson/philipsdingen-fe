import { Component } from 'react';

class AddressForm extends Component {
    constructor(props) {
        super(props)
        this.state = this.initialState()
        this.handleChange = this.handleChange.bind(this)
    }

    initialState() {
        return {
            name: '',
            street_address: '',
            city: '',
            state: '',
            zip_code: '',
        }
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const wideInput ="p-Tab Tab shadow appearance-none border rounded mb-4 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

        return(
            <div>
                <form>
                    <input
                        className={wideInput}
                        name={"name"}
                        value={this.state.name}
                        placeholder={"Name"}
                        onChange={this.handleChange}
                    />
                    <input
                        className={wideInput}
                        name={"street_address"}
                        value={this.state.street_address}
                        placeholder={"Street Address"}
                        onChange={this.handleChange}
                    />
                    <div className={"flex justify-between"}>
                        <input
                            className={wideInput}
                            name={"city"}
                            value={this.state.city}
                            placeholder={"City"}
                            onChange={this.handleChange}
                        />
                        <input
                            className={wideInput}
                            name={"zip_code"}
                            value={this.state.zip_code}
                            placeholder={"Zipcode"}
                            onChange={this.handleChange}
                        />
                    </div>
                </form>
            </div>
        )
    }

}

export default AddressForm