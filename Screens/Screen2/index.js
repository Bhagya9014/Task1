import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';

export default class Screen2 extends React.Component {
  constructor() {
    super();
    this.state = {
        show: true,
        radioSelected: 1
    }
  }

  radioClick(id) {
    this.setState({
      radioSelected: id
    })
  }

  showMenu = () => {
      this.setState({show: !this.state.show});
  }

  render(){
    this.props.Data.map((item) => {
      item.image = require('./assets/image/comments.png');
    })

    let len = 0;
    this.props.itemArray.map((item) => {
      if(item > 0){
        len = len + 1;
      }
    })

    let restData = this.props.Data.length >= 2 && this.state.show ? this.props.Data.slice(0, 2) : this.props.Data;  
    
    const options = [
      {
        id: 1,
        val: 'Dine-in',
        image: require('./assets/image/dinner.png')
      },
      {
        id: 2,
        val: 'Take way',
        image: require('./assets/image/car.png')
      },
    ];

    return(
      <SafeAreaView style={{flex: 1,backgroundColor: 'black'}}>
          <View style={styles.subView}>
              <TouchableOpacity onPress={()=>this.props.closeModal()}>
                <Image
                  source={ require('./assets/image/back.png') }
                  style={[styles.imgStyling,{tintColor: '#fff'}]}
                />
              </TouchableOpacity>
              <Text style={styles.header}>My Cart</Text>
          </View>
          <View style={styles.costCard}>
              <Text style={styles.costHeader}>Total Cost</Text>
              <Text style={styles.cost}>{'\u20AC'}{this.props.cost}.00</Text>
          </View>
         <View style = {{flex: 1, backgroundColor: 'white'}}>
              <ScrollView>
                  <Text style={styles.flatListHeader}>Review Orders</Text>
                  <FlatList
                      data={restData}
                      renderItem={this.props.renderItem}
                      keyExtractor={item => item.id}
                  />
                  {len > 2 ? 
                          <View style={{marginLeft: 24}}>
                              <TouchableOpacity onPress={() => this.showMenu()}>
                                  <Text style={{marginRight: this.state.show ? 24 : 42,marginLeft: '74%',fontSize: 16,borderBottomWidth: 1}}>{this.state.show?"Show More":"Collapse"}</Text>
                              </TouchableOpacity>                         
                          </View>
                  : null}
                  <View style={styles.margin}> 
                    <Text style={styles.delivery}>Delivery Options</Text>
                    <View style={styles.deliveryView}>
                      {options.map((val) => {
                        return(
                          <View style={styles.delSubView}>
                            <Image
                              source={ val.image }
                              style={[styles.imgStyling,{width: 26, height: 26}]}
                            />
                            <Text style={styles.delText}>{val.val}</Text>
                            <TouchableOpacity key={val.id} onPress={() => this.radioClick(val.id)}>
                              <View style={[styles.radioOuter,{ borderColor: val.id == this.state.radioSelected ? 'orange' : '#000'}]}>
                                {
                                  val.id == this.state.radioSelected ?
                                    <View style={styles.radioInner} />
                                    : null
                                }
                              </View>
                            </TouchableOpacity>
                          </View>
                      )
                    })} 
                  </View>
                </View>
              <View style={styles.margin}> 
                  <Text style={styles.cardHeader}>Manage Cards</Text>
              </View>
            </ScrollView>
            <View style={styles.tabView}>
                <Text style={styles.tabText}>PLACE ORDER</Text>
            </View>
        </View>
      </SafeAreaView>
    );
  }
}