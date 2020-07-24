import { StyleSheet } from 'react-native';

function elevationShadowStyle(elevation){
    return {
      elevation,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 0.5 * elevation },
      shadowOpacity: 0.3,
      shadowRadius: 0.8 * elevation
    };
  }

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    imgStyle: {
        width: '100%',
        height: '30%' 
    },
    iconStyle1: {
        color: '#fff',
        fontSize: 32,
        position: 'absolute',
        marginLeft: 10,
        marginTop: 12
    },
    iconStyle2: {
        color: '#fff',
        fontSize: 32,
        position: 'absolute',
        right: 48,
        marginTop: 12,
        transform: [{rotate: '270deg'}]
    },
    iconStyle3: {
        color: '#fff',
        fontSize: 32,
        position: 'absolute',
        right: 10,
        marginTop: 12
    },
    cardView: {
        marginTop: -50,
        alignSelf: 'center',
        borderRadius: 6,
        width: '90%',
        height: '24%',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        ...elevationShadowStyle(5)
    },
    textStyle: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 12
    },
    row:{
        flexDirection: 'row'
    },
    iconSize:{
        fontSize: 24
    },
    btnStyle:{
        backgroundColor: '#000',
        borderRadius: 8
    },
    btnText:{
        color: '#fff',
        marginHorizontal: 16,
        marginVertical: 8
    },
    flatView:{
        marginTop: 150
    },
    header:{
         marginLeft: 24,
         fontSize: 20,
         fontWeight: "bold", 
         marginBottom: 24
    },
    smallView:{
        borderRadius: 6,
        width: '24%', 
        height: '4%', 
        backgroundColor: 'orange', 
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 74,
        right: 150,
        flexDirection: 'row'
    },
    tabBar: {
        width: '100%', 
        height: 50, 
        backgroundColor: '#000', 
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0, 
        flexDirection: 'row'
    },
    subView: {
        marginBottom: 18,
        marginLeft: 24
    },
    innerView: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10
    },
    type1: {
        marginTop: 6,
        borderWidth: 1, 
        borderRadius: 4,
        paddingHorizontal: 2
    },
    countBtn: {
        paddingHorizontal: 6,
        paddingVertical: 2,
        position: 'absolute', 
        right: 24,
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'orange'
    },
    type2: {
        borderWidth: 1, 
        borderRadius: 4,
        paddingHorizontal: 2
    },
    cost: {
        marginVertical: 4,
        color: 'orange',
        marginLeft: 22, 
        fontSize : 16,
        marginBottom: 8
    },
    countText: {
        marginTop: 2,
        fontSize: 12,
        paddingHorizontal: 24
    },
    commentIcon: {
        position: 'absolute',
        right: 24,
        fontSize: 24
    },
})