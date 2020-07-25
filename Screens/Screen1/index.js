import React from 'react';
import {
  ScrollView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Screen2 from '../Screen2';
import styles from './styles';
import { connect } from 'react-redux';


class Screen1 extends React.Component {
  constructor() {
    super();
    this.state = {
        visible: false,
    }
  }

  increase = (item) => {
    if(item.count < 20){
      item.count = item.count + 1;
      if(item.count > 1){
        this.props.removeItem(item);
      }
      this.props.addItem(item);
    }
  }

  decrease = (item) => {
    this.props.removeItem(item);
    if(item.count > 1){
      item.count = item.count - 1;
      this.props.addItem(item);
    }
  }

  renderItem = ({ item }) => {
    let data = this.props.cartItems.find(data => data.id === item.id);
    item.count = data ? data.count : item.count; 
    return(
      <View style={[styles.subView,{borderBottomWidth: item.image ? 0.2 : 0}]}>
        <View style={styles.innerView}>
          <Text style={styles.type1}>{item.type1}</Text>
          <Text style={{marginLeft: 4}}>{item.title1}</Text>
          <View style={styles.countBtn}>
              {!data  ?  <TouchableOpacity onPress={() => this.increase(item)}><Text style={{paddingHorizontal: 12,paddingVertical: 2}}>ADD</Text></TouchableOpacity> 
              : 
              <View style={styles.row}>
                <TouchableOpacity onPress={() => this.decrease(item)}><Text style={{fontSize: 16,fontWeight: 'bold'}}>-</Text></TouchableOpacity>
                  <Text style={styles.countText}>{data ? data.count : item.count}</Text>
                <TouchableOpacity onPress={() => this.increase(item)}><Text style={{fontSize: 16}}>+</Text></TouchableOpacity>
              </View>
              }
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
            {item.type2 ? <Text style={styles.type2}>{item.type2}</Text> : null}
            <Text style={{marginLeft: item.type2 ? 4 : 20}}>{item.title2}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cost}>{'\u20AC'}{item.cost}</Text>
          <Image
                source={ item.image }
                style={[styles.imgStyling,{tintColor: '#000',height: 28,width: 28,position: 'absolute',right: 24}]}
              />
        </View>
      </View>
    );
  }

  openModal = () => {
    this.setState({visible : true})
  }

  closeModal = () => {
      this.setState({visible : false});
  }
  render(){
    let DATA = [
      {
        id: 1,
        title1: 'Guac de la Costa',
        type1: 'N',
        title2: 'tortllas de mals, fruit de la passion, mango',
        type2: 'D',
        cost: 7,
        count: 0
      },
      {
        id: 2,
        title1: 'Chicharron y Cerveza',
        type1: 'N',
        title2: 'citron vert / Corona sauce',
        cost: 7,
        count: 0
      },
      {
        id: 3,
        title1: 'Chilitos con Can',
        type1: 'N',
        title2: 'padrones tempura, gamous',
        cost: 8,
        count: 0
      },
      {
        id: 4,
        title1: 'Guac de la Costa',
        type1: 'N',
        title2: 'citron vert / Corona sauce',
        cost: 9,
        count: 0
      },
    ];    

    let total = 0;
    this.props.cartItems.map((item) => {
        total = total + item.count;
    })

    return(
      <View style={styles.mainContainer}>
          <Image
            source={ require('./assets/image/food.png') }
            style={styles.imgStyle}
          />
          <Image
              source={ require('./assets/image/back.png') }
              style={[styles.imgStyling,styles.imgPos,{marginLeft: 10}]}
            />
          <Image
            source={ require('./assets/image/export.png') }
            style={[styles.imgStyling,styles.imgPos,{right: 48}]}
          />
          <Image
          source={ require('./assets/image/info.png') }
          style={[styles.imgStyling,styles.imgPos,{ right: 10}]}
          />
          <View style={styles.cardView}>
            <Text style={styles.textStyle}>Inka Restaurant</Text>
            <View style={styles.row}>
              <Image
                  source={ require('./assets/image/star.png') }
                  style={[styles.imgStyling,styles.imgColor]}
                />
              <Text> 5.0(200+) | All days : 09:00 AM - 06:00 PM</Text>
            </View>
            <View style={styles.row}>
              <Image
                  source={ require('./assets/image/phone.png') }
                  style={[styles.imgStyling,styles.imgColor]}
                />
              <Text style={{marginBottom: 10}}> Reach us at : 9854562142</Text>
            </View>
            <TouchableOpacity style={styles.btnStyle}>
                <Text style={styles.btnText}>BOOK A TABLE</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <Text style={styles.header}>Starter</Text>
            <FlatList
                data={DATA}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
                nestedScrollEnabled={true}
            />
         </ScrollView>
         <View style={styles.smallView}>
            <Image
                    source={ require('./assets/image/spoon.png') }
                    style={[styles.imgStyling,{tintColor: '#000'}]}
                  />
            <Text style={{fontWeight: 'bold'}}> MENU</Text>
         </View>
         <TouchableOpacity onPress = {() => this.openModal()} style={styles.tabBar}>
                <Image
                      source={ require('./assets/image/shopping-cart.png') }
                      style={styles.imgStyling}
                    />
                <Text style={{color: '#fff',fontSize: 16}}> VIEW CART ({total} ITEMS)</Text>
          </TouchableOpacity>
          <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.visible}
          onRequestClose={this.closeModal}>
              <Screen2 closeModal={this.closeModal} renderItem={this.renderItem}/>
          </Modal>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      cartItems: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product }),
      addItem: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Screen1);