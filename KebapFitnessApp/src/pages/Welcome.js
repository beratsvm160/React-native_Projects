import React from 'react'
import { View,Text,SafeAreaView,StyleSheet} from 'react-native';
import Button from '../components/Button';
function Welcome({navigation}){
    function goToMemberSign(){
        navigation.navigate('MemberSignScreen');
    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Kebap Fitness Salonu</Text>
            <Button text="Üye Kaydı Oluştur" onPress={goToMemberSign}/>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
    },
    header:{
        textAlign: 'center',
        fontSize:30,
        fontWeight: 'bold',
        margin:5,
        color:'black',
    }
})
export default Welcome;