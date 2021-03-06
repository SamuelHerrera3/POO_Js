class Producto{
    static contadorProductos = 0;
    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
        this.idProducto = ++Producto.contadorProductos;
    }

    get idProducto(){
        return this.idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `id producto: ${this.idProducto} 
                nombre: ${this._nombre}
                precio: ${this._precio}`    
    }
}

class Orden {
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }else{
            console.log("no se pueden agregar mas productos")
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio; 
        }
    }

    mostrarOrden(){
        let productoOrden = '';
        for(let producto of this._productos){
            productoOrden += producto.toString() + ' ';
        }
        console.log(`Orden: ${this._idOrden}
                     Total: ${this.calcularTotal()}
                     Productos: ${productoOrden}`)
    }
}