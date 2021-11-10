import React, {
    createContext,
    useEffect,
    useState
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const OrderItemsContext = createContext();

export const OrderItemsProvider = ({ children }) => {
    const [ orderedItems, setOrderedItems ] = useState(null);

    let fetchedOrders = [];

    const getOrderedItems = async () => {
        try {
            const existingOrders = await AsyncStorage.getItem('@orderKey');
            if (existingOrders !== null) {
                fetchedOrders.push(JSON.parse(existingOrders));
                console.log('These are the orders in getOrderedItems', fetchedOrders);
                setOrderedItems(fetchedOrders);
            } else {
                setOrderedItems(null);
            }
            return;
        } catch (e) {
            console.log('error in OrderContext', e);
        }
    };

    const addOrderedItem = async (item) => {
        const fetchedData = await AsyncStorage.getItem('@orderKey');
        const existingOrders = JSON.parse(fetchedData);

        try {
            if (!existingOrders) {
                await AsyncStorage.setItem('@orderKey', JSON.stringify(item));
                getOrderedItems();
            }

            if (existingOrders && orderedItems.length === 1) {
                console.log('parsed existing orders', existingOrders);

                fetchedOrders.push(existingOrders);
                console.log('fetchedOrders 1', fetchedOrders);
                
                fetchedOrders.push(item);
                console.log('fetchedOrders 2', fetchedOrders);

                await AsyncStorage.mergeItem('@orderKey', JSON.stringify(fetchedOrders));

                getOrderedItems();
            }
        } catch (e) {
            console.log('error in addOrderedItem', e);
        }
    }

    const clearOrderedItems = async () => {
        try {
            await AsyncStorage.clear();
        } catch(e) {
            console.log('error in clearOrderedItems', e);
        }

        console.log('clearOrderedItems has run');
    };

    useEffect(() => {
        console.log('in useEffect checking state updated',orderedItems);
    }, [orderedItems]);

    useEffect(() => {
        getOrderedItems();
    }, []);

    return (
        <OrderItemsContext.Provider value={{
            addOrderedItem,
            clearOrderedItems,
            orderedItems
        }}>
            {children}
        </OrderItemsContext.Provider>
    )
}