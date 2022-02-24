import React, { useEffect, useRef, useState } from 'react';
import { FlatList as RnFlatList } from 'react-native';
import Footer from './footer';
import { Data, FlatListProps } from './types';

const FlatList = <ItemT extends object>({ itemComponent, dataSource }: FlatListProps<ItemT>) => {
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [items, setItems] = useState<ItemT[]>([]);

    const previousResponse = useRef<Data<ItemT> | undefined>(undefined);

    const loadMore = async () => {
        setIsLoadingMore(true);
        try {
            const response = await dataSource({
                previousResponse: previousResponse.current,
                items,
            });
            previousResponse.current = response;
            setItems([...items, ...response.items]);
        } catch (e) {
            console.log(e);
        }
        setIsLoadingMore(false);
    };

    useEffect(() => {
        loadMore();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <RnFlatList
            renderItem={itemComponent}
            data={items}
            onEndReached={loadMore}
            ListFooterComponent={<Footer showIf={isLoadingMore} />}
        />
    );
};

export default FlatList;