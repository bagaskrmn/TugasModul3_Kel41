import React, {Component} from 'react';

import './CSS/style.css';

class Produk extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: this.props.stock,
            sub:"Beli",
            status: "Tersedia",
            disabled: false
        }
    }
    TombolBeli = () => {
        this.setState ({
            stock: this.state.stock-1
        })

        if (this.state.stock === 1) {
            this.setState ({
                status : "Habis",
                disabled : true,
                sub : "Tidak Dapat Membeli"
            })
            
        } else {
            
        }
    
    }
    componentDidUpdate(prevState) {
        alert(`Stock di-Update!`)
        } 

    shouldComponentUpdate(nextState) {
        return window.confirm('Anda yakin membeli barang ini?');
        }
        

    render() {
        return (
            <div className="wrapper">
                <h1><b>KOMPONEN 1</b></h1>
                <h2>{this.props.nama}</h2>
                <img src="https://orleeozora.com/wp-content/uploads/2018/12/WOODLINE-HEADLESS-DX5AC-E-REDOIL_01.jpg" alt=""/>
                <p><b>Rp. {this.props.harga}</b></p>
                <p>Jumlah Stock : {this.state.stock}</p>
                <button className="btn-click" onClick={this.TombolBeli} disabled={this.state.disabled}>{this.state.sub}</button>
                <p>{this.state.status}</p>
            
            </div>
        )
    }
}

export default Produk;