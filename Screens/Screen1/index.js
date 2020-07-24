import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  Platform,
} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Screen2 from '../Screen2';
import styles from './styles';


export default class Screen1 extends React.Component {
  constructor() {
    super();
    this.state = {
        visible: false,
        itemArray: [],
        count: 0,
        cost: 0
    }
  }

  increase = (id,cost) => {
    if(this.state.itemArray[id] < 20){
      const some_array = [...this.state.itemArray]
      some_array[id] = this.state.itemArray[id]+1;
      this.setState({itemArray:some_array, count: this.state.count+1,cost: this.state.cost+cost})
    }
  }

  decrease = (id,cost) => {
    const some_array = [...this.state.itemArray]
    some_array[id] = this.state.itemArray[id]-1;
    this.setState({itemArray:some_array, count: this.state.count-1,cost: this.state.cost-cost})
  }

  renderItem = ({ item }) => {
    if(!this.state.itemArray[item.id-1])
    {
      this.state.itemArray[item.id-1] = 0;
    }
    if(item.icon && this.state.itemArray[item.id-1] == 0){
      return null;
    }
    else{
    return(
      <View style={[styles.subView,{borderBottomWidth: item.icon ? 0.2 : 0}]}>
        <View style={styles.innerView}>
        <Text style={styles.type1}>{item.type1}</Text>
        <Text style={{marginLeft: 4}}>{item.title1}</Text>
        <View style={styles.countBtn}>
            {this.state.itemArray[item.id-1] == 0  ?  <TouchableOpacity onPress={() => this.increase(item.id-1,item.cost)}><Text style={{paddingHorizontal: 12,paddingVertical: 2}}>ADD</Text></TouchableOpacity> 
            : 
            <View style={styles.row}>
              <TouchableOpacity onPress={() => this.decrease(item.id-1,item.cost)}><Text style={{fontSize: 16,fontWeight: 'bold'}}>-</Text></TouchableOpacity>
                <Text style={styles.countText}>{this.state.itemArray[item.id-1]}</Text>
              <TouchableOpacity onPress={() => this.increase(item.id-1,item.cost)}><Text style={{fontSize: 16}}>+</Text></TouchableOpacity>
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
          {/* {item.icon ? <Icon name='comment-multiple' style={styles.commentIcon}/> : null} */}
        </View>
      </View>
    );
    }
  }

  openModal = () => {
    this.setState({visible : true})
  }

  closeModal = () => {
      this.setState({visible : false});
  }
  render(){
    const DATA = [
      {
        id: 1,
        title1: 'Guac de la Costa',
        type1: 'N',
        title2: 'tortllas de mals, fruit de la passion, mango',
        type2: 'D',
        cost: 7
      },
      {
        id: 2,
        title1: 'Chicharron y Cerveza',
        type1: 'N',
        title2: 'citron vert / Corona sauce',
        cost: 7
      },
      {
        id: 3,
        title1: 'Chilitos con Can',
        type1: 'N',
        title2: 'padrones tempura, gamous',
        cost: 8
      },
      {
        id: 4,
        title1: 'Chilitos con Can',
        type1: 'N',
        title2: 'padrones tempura, gamous',
        cost: 8
      },
    ];    
    return(
      <View style={styles.mainContainer}>
          <Image
            source={ require('./food.png') }
            style={styles.imgStyle}
          />
          {/* <Icon name={Platform.OS == 'ios' ? 'chevron-left' : 'arrow-left'} style={styles.iconStyle1}/>
          <Icon name='application-export' style={styles.iconStyle2}/>
          <Icon name='information-outline' style={styles.iconStyle3}/> */}
          <View style={styles.cardView}>
            <Text style={styles.textStyle}>Inka Restaurant</Text>
            <View style={styles.row}>
              {/* <Icon name='star-outline' style={styles.iconSize}/> */}
              <Text> 5.0(200+) | All days : 09:00 AM - 06:00 PM</Text>
            </View>
            <View style={styles.row}>
              {/* <Icon name='phone-in-talk-outline' style={styles.iconSize}/> */}
              <Text style={{marginBottom: 10}}> Reach us at : 9854562142</Text>
            </View>
            <TouchableOpacity style={styles.btnStyle}>
                <Text style={styles.btnText}>BOOK A TABLE</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
          <View style={styles.flatView}>
            <Text style={styles.header}>Starter</Text>
            <FlatList
                data={DATA}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
                nestedScrollEnabled={true}
            />
         </View>
         </ScrollView>
         <View style={styles.smallView}>
            {/* <Icon name='silverware-fork-knife' style={styles.iconSize}/> */}
            <Text style={{fontWeight: 'bold'}}> MENU</Text>
         </View>
          <TouchableOpacity onPress = {() => this.openModal()} style={styles.tabBar}>
                {/* <Icon name='cart-outline' style={{color: '#fff', fontSize: 32}}/> */}
                <Text style={{color: '#fff',fontSize: 16}}> VIEW CART ({this.state.count} ITEMS)</Text>
          </TouchableOpacity>
          <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.visible}
          onRequestClose={this.closeModal}>
              <Screen2 closeModal={this.closeModal} Data={DATA} cost={this.state.cost} itemArray={this.state.itemArray} renderItem={this.renderItem}/>
          </Modal>
      </View>
    );
  }
}