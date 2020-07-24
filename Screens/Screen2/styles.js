import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    subView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 4
    },
    imgStyling: {
        marginLeft: 4,
        tintColor: '#000',
        height: 20,
        width: 20
    },
    header: {
        marginTop: 1,
        marginLeft: 20, 
        color: '#fff', 
        fontSize: 24
    },
    costCard: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 62,
        marginVertical: 60,
        borderRadius: 6, 
        backgroundColor: '#fff'
    },
    costHeader: {
        color: 'orange', 
        fontSize: 16
    },
    cost: {
        fontWeight: 'bold',
        fontSize: 24
    },
    flatListHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 6,
        marginTop:8,
        marginBottom: 28
    },
    delivery: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 6,
        marginTop: 8
    },
    deliveryView: {
        marginLeft: 26,
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioOuter: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioInner: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: 'orange',
      },
    margin: {
        marginTop: 12
    },
    cardHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 6,
        marginTop: 8
    },
    tabView: {
        width: '100%', 
        height: 50, 
        backgroundColor: '#000', 
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0
    },
    tabText: {
        color: '#fff', 
        fontSize: 16
    },  
    delSubView: {
        flexDirection: 'row',
        marginRight: 46
    },
    delText: {
        paddingHorizontal: 12,
        marginTop: 2
    }
})