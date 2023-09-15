import { Provider } from "react-redux";
import ListProducts from "../components/ListProducts";
import {render, screen, waitFor} from '@testing-library/react';
import { store } from "../redux/store";
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';

jest.mock("axios");

it("should render ListProducts", async () => {

    (axios.get as jest.Mock).mockResolvedValueOnce({data: 
                [{id: 1, name: "p1", description: "d1", price: 3000},
                {id: 2, name: "p2", description: "d2", price: 7000}]});

    render(<BrowserRouter> <Provider store={store}><ListProducts/></Provider> </BrowserRouter>);
    await waitFor(() => {
        expect(screen.getByText("List Products")).toBeTruthy();
        let allProducts = screen.getAllByTestId("product");
        expect(allProducts.length).toBe(2);
    })

    

    
})