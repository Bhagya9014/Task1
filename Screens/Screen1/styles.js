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
    imgStyling:{
        marginLeft: 4,
        tintColor: '#fff',
        height: 24,
        width: 24
    },
    imgColor: {
        tintColor: '#000',
        height: 20, 
        width: 20
    },
    imgPos: {
        position: 'absolute',
        marginTop: 32
    },
    imgStyle: {
        width: '100%',
        height: '30%' 
    },
    cardView: {
        marginTop: -50,
        alignSelf: 'center',
        borderRadius: 6,
        paddingVertical: 20,
        paddingHorizontal: 44,
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
    btnStyle:{
        backgroundColor: '#000',
        borderRadius: 8
    },
    btnText:{
        color: '#fff',
        marginHorizontal: 16,
        marginVertical: 8
    },
    header:{
        marginTop: 24,
         marginLeft: 24,
         fontSize: 20,
         fontWeight: "bold", 
         marginBottom: 24
    },
    smallView:{
        borderRadius: 6,
        paddingHorizontal: 20,
        paddingVertical: 8,
        backgroundColor: 'orange', 
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 82,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    tabBar: {
        width: '100%', 
        height: 60, 
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
})