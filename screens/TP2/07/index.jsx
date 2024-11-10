import { View, Text, StyleSheet } from 'react-native';
import ListItem from './listItem';
 
export default function TP2_07() {
    const listItems = [
        { text: 'Item A' },
        { text: 'Item B' },
        { text: 'Item C' },
        { text: 'Item D' },
        { text: 'Item E' }
    ]
    return (
        <View style={styles.container}>
            {
                listItems.map((item, idx) => <ListItem text={item.text} key={`list_${idx}`} />)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        gap: 15,
        paddingHorizontal: 5,
        marginVertical: 15,
        flexDirection: 'column',
    },
})