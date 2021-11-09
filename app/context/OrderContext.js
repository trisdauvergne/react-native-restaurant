import React, {
    createContext,
    useEffect,
    useState
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const OrderItemsContext = createContext();

export const OrderItemsProvider = ({ children }) => {
    const [ orderedItems, setOrderedItems ] = useState([]);

    const getOrderedItems = async () => {
        try {
            const jsonOrders = await AsyncStorage.getItem('@orderKey');
            console.log('4. in getOrderedItems', JSON.parse(jsonOrders));
            setOrderedItems(JSON.parse(jsonOrders));
            // console.log('orderedItems', orderedItems);
            // return jsonOrders != null ? JSON.parse(jsonOrders) : null;
            return;
        } catch (e) {
            console.log('error in OrderContext', e);
        }
    };

    const addOrderedItem = async (item) => {
        console.log('2. Item to add to storage', item);
        try {
            const jsonOrder = JSON.stringify(item);
            await AsyncStorage.setItem('@orderKey', jsonOrder);
            console.log('3. item set to storage', jsonOrder);
            getOrderedItems();
        } catch (e) {
            console.log('error in addOrderedItem', e);
        }
    }

    // useEffect(() => {
    //     getOrderedItems();
    // }, []);

    useEffect(() => {
        getOrderedItems();
    }, []);

    useEffect(() => {
        console.log('5. in useEffect checking state',orderedItems);
    }, [orderedItems]);

    return (
        <OrderItemsContext.Provider value={{
            addOrderedItem
        }}>
            {children}
        </OrderItemsContext.Provider>
    )
}