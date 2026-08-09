import { map, atom } from 'nanostores';

export const cartItems = map({});
export const shippingCost = atom(80);
export const shippingZone = atom('Tegucigalpa (1 Día)');

// REGLA DE PERSISTENCIA (El salvavidas del carrito)
if (typeof window !== 'undefined') {
    // Al cargar la página, leemos si había algo guardado
    const storedCart = localStorage.getItem('decante_cart');
    if (storedCart) {
        cartItems.set(JSON.parse(storedCart));
    }
    // Cada vez que agreguemos/quitemos algo, se guarda en el disco duro
    cartItems.subscribe(value => {
        localStorage.setItem('decante_cart', JSON.stringify(value));
    });
}

// Agregar al carrito
export function addCartItem(item) {
    const uniqueId = `${item.id}-${item.tamaño.replace(/\s+/g, '-').toLowerCase()}`;
    const existingItem = cartItems.get()[uniqueId];

    if (existingItem) {
        cartItems.setKey(uniqueId, {
            ...existingItem,
            cantidad: existingItem.cantidad + item.cantidad
        });
    } else {
        cartItems.setKey(uniqueId, { ...item, uniqueId, cantidad: item.cantidad });
    }
}

// Quitar del carrito
export function removeCartItem(uniqueId) {
    const items = { ...cartItems.get() };
    delete items[uniqueId];
    cartItems.set(items);
}

// Actualizar cantidad
export function updateItemQuantity(uniqueId, newQuantity) {
    if (newQuantity <= 0) {
        removeCartItem(uniqueId);
        return;
    }
    const existingItem = cartItems.get()[uniqueId];
    cartItems.setKey(uniqueId, {
        ...existingItem,
        cantidad: newQuantity
    });
}