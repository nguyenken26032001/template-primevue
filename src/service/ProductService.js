export class ProductService {
    constructor () {
        this.contextPath = import.meta.env.BASE_URL;
    }

    getProductsSmall () {
        return fetch(this.contextPath + 'demo/data/products-small.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then(res => res.json())
            .then(d => d.data);
    }

    getProducts () {
        return fetch(this.contextPath + 'demo/data/products.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then(res => res.json())
            .then(d => d.data);
    }

    getProductsMixed () {
        return fetch(this.contextPath + 'demo/data/products-mixed.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then(res => res.json())
            .then(d => d.data);
    }

    getProductsWithOrdersSmall () {
        return fetch(this.contextPath + 'demo/data/products-orders-small.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then(res => res.json())
            .then(d => d.data);
    }

    getProductsWithOrdersLarge () {
        return fetch(this.contextPath + 'demo/data/products-orders.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then(res => res.json())
            .then(d => d.data);
    }
}
