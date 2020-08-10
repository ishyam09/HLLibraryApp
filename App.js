import React, {Component} from 'react';
import { Text, View, Image, SafeAreaView, FlatList, Modal, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  
  render() {
    return(
      <SafeAreaView>
        <FlatList 
          horizontal pagingEnabled={true} 
          showsHorizontalScrollIndicator={false} 
          legacyImplementation={false} 
          ItemSeparatorComponent={ () => <View style={{ width: 16, backgroundColor: 'white' }}/> }
          style= {{marginLeft: 20, marginRight: 20}}
          data={data}
          renderItem={({ item }) => 
            <View style={{flex: 1, height: 300, width: 300, marginTop: 10}}>
              <TouchableOpacity style={{flex: 2}} onPress={() => {this.setState({show: true})}}>
                <View style={{flex: 2}}>
                  <Image source={item.image} style={{flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 30}}/>
                </View>
              </TouchableOpacity>
              <View style={{flex: 1}}>
                 <Text style={{paddingHorizontal: 10, fontSize: 12, marginTop: 3}} >{item.category}</Text>
                 <View style={{paddingLeft: 10, width: 50, marginTop: 3}}>
                 <StarRating 
                  starSize={25} 
                  disabled={true} 
                  maxStars={5} 
                  rating={item.rating} 
                  fullStarColor='#FFD700'/>
                 </View>
                 <TouchableOpacity onPress={() => {this.setState({show: true})}}>
                   <Text style={{paddingHorizontal: 10, fontSize: 20, fontWeight:'700', marginTop: 5}} >{item.title} </Text>
                 </TouchableOpacity>
              </View>

              <Modal transparent = {true} visible={this.state.show}>
                <View style={{backgroundColor:'#000000AA', flex: 1}}>
                  <View style={{backgroundColor: 'white', margin: 50, padding: 50}}>
                    <TouchableOpacity onPress={() => {this.setState({show: false})}}>
                      <Text style={{fontSize: 20}}>{item.image.uri !=null ? item.image.uri : "No url found"}</Text>
                    </TouchableOpacity>
                  </View>
                </View>

              </Modal>

            </View> }
          keyExtractor={item => item.id.toString()} />
      </SafeAreaView>
    )
  }
}

export const data = [
  {
      id: 1,
      category: 'advertisement',
      title: 'Please subscribe to view more exclusive contents.',
      image: require('./assets/images/localAd-1.jpg'),
  },
  {
      id: 2,
      category: 'advertisement',
      title: '2 months for only Rm15.90 for offline movies.',
      image: require('./assets/images/localAd-2.jpg'),
  },
  {
      id: 3,
      category: 'SCIENCE FICTION',
      title: 'Blade Runner Future 2049.',
      image: { uri: 'https://i.imgur.com/L68FtMA.jpg' }, 
      rating: 4.0,
  },
  {
      id: 4,
      category: 'SUPERHERO ACTION',
      title: 'Captain America Civil War.',
      image: { uri: 'https://i.imgur.com/tAui2H7.jpg' }, 
      rating: 3.5,
  },
  {
      id: 5,
      category: 'ROMANCE',
      title: 'Beauty and the Beast.',
      image: { uri: 'https://i.imgur.com/J5pgFyr.jpg' }, 
      rating: 2.5,
  },
  {
      id: 6,
      category: 'DRAMA',
      title: 'Shawshank Redemption.',
      image: { uri: 'https://i.imgur.com/7YGXDbM.jpg' }, 
      rating: 3.0,
  },
];
