    import React, {Component} from "react"; 
  
	class Cart extends Component {  
        constructor(){
            super()
            this.state = {
                cart: [], 
                user: "", 
                total: 0, 
                
                
            }
        }
        initCart = () => {
            let tempCart = []
            if(localStorage.getItem("cart") !== null){
                tempCart = JSON.parse(localStorage.getItem("cart"))
            }
            let userName = localStorage.getItem("user")
            let totalHarga = 0;
           
            tempCart.map(item => {
                totalHarga += (item.harga * item.jumlahBeli)
               
            })
            
            this.setState({
                cart: tempCart,
                user: userName,
                total: totalHarga,
               
            })
        }
        componentDidMount(){
            this.initCart()
    }
    removeFromCart = (halo) => {
        let carts = JSON.parse(localStorage.getItem('cart'));
        let cart = carts.filter(item => item.isbn === halo.isbn );
           localStorage.removeItem('cart', JSON.stringify(cart));
           this.initCart()
    }


    editItem = selectedItem => {
        let tempCart = []
        if(localStorage.getItem("cart") !== null){
            tempCart = JSON.parse(localStorage.getItem("cart"))
        }

        let index = tempCart.findIndex(item =>  item.isbn === selectedItem.isbn)
        let promptJumlah = window.prompt(`Masukkan jumlah ${selectedItem.name} yang beli`,selectedItem.jumlahBeli)
        tempCart[index].jumlahBeli = promptJumlah

        // update localStorage
        localStorage.setItem("cart", JSON.stringify(tempCart))

        // refersh cart
        this.initCart()
    }
    
       
	render(){
        return(
            <div className="container">
                <div className="card col-12 mt-2">
                    <div className="card-header bg-primary text-white">
                        <h4>Data Keranjang Belanja</h4>
                    </div>
                    <div className="row">

            </div>

                    <div className="card-body">
                        <h5 className="text-primary">
                            Nama User: { this.state.user }
                        </h5>

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Nama Item</th>
                                    <th>Harga</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                    <th>----</th>
                                </tr>
                            </thead>

                            <tbody>
                                { this.state.cart.map( (item, index) => (
                                    <tr key={index}>
                                        <td>{item.judul}</td>
                                        <td>Rp {item.harga}</td>
                                        <td>{item.jumlahBeli}</td>
                                        <td>
                                            Rp { item.harga * item.jumlahBeli }
                                        </td>
                                        <td><button className="btn btn-sm btn-success m-1"
                            onClick={() => this.removeFromCart(item)}>
                               Delete
                            </button></td>
                            <td><button className="btn btn-sm btn-success m-1"
                             onClick={() => this.editItem(item)}>
                              
                                 
                               edit
                            </button></td>
                                    </tr>
                                ) ) }
                            </tbody>
                        </table>

                        <h4 className="text-danger">
                            Total Harga: Rp {this.state.total}
                        </h4>
                    </div>
                </div>
            </div>
        )
    }

	}  
	export default Cart; 
