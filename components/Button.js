import { StyleSheet, TouchableOpacity, Text } from "react-native"

export default Button = ({ onPress, buttonText }) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.textColor}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#014aac',
        width: '90%',
        padding: 10,
        borderRadius: 10
    },
    textColor: {
        color: 'white'
    }
}); 