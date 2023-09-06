
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import {
    ActivityIndicator,
    Button,
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';


const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flexDirection: 'column',
        padding: 10,
        gap: 10,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
});

const data = [
    { id: 1, title: "Задание 1" },
    { id: 2, title: "Задание 2" },
]

export default function App() {
    const [input, setInput] = useState();
    const [loading, setLoading] = useState(true);
    const onRefresh = useCallback(() => {
        setLoading(prev => !prev);
    }, [setLoading]);
    
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {loading && <ActivityIndicator />}
            <FlatList
                refreshing={loading}
                onRefresh={onRefresh}
                data={data}
                renderItem={({ item }) => <Text>{item.title}</Text>}
                style={{ height: '80%' }}
            />
            <Button
                title='Привет'
                onPress={onRefresh}
            />
        </View>
    );
} 