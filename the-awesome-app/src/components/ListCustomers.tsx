import { Component, ReactNode } from "react";

class ListCustomers extends Component{

    state = {
        customers: []
    }
    componentDidMount(): void {
        
        this.fetchCustomers();
    }

    async fetchCustomers(){
        try {
            
            const url = "http://localhost:9000/customers";
            const response = await fetch(url);
            const data = await response.json();
            this.setState({
                customers: data
            });

        } catch (error) {
            console.log("error", error);
        }
    }

    render(): ReactNode {
        return (
            <div>
                <h3>List Customers</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Customer ID</th>
                            <th>Name</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.customers.map((item: any) => {
                            return(
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.location}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListCustomers;