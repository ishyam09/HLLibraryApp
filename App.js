import React, {Component} from 'react';
import { StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform, SafeAreaView } from 'react-native';

  import StarRating from 'react-native-star-rating';


  const { width, height } = Dimensions.get("window");
  const CARD_HEIGHT = 220;
  const CARD_WIDTH = width * 0.8;
  const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }
 
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return(
      <SafeAreaView>
        <Text>New Releases</Text>

        <ScrollView horizontal
        pagingEnabled // Enable paging
 decelerationRate={0} // Disable deceleration
 snapToInterval={0+10} // Calculate the size for a card including marginLeft and marginRight
 snapToAlignment='center' // Snap to the center
        contentInset={{ // iOS ONLY
          top: 0,
          left: 20, // Left spacing for the very first card
          bottom: 0,
          right: 20 // Right spacing for the very last card
        }}
        contentContainerStyle={{ // contentInset alternative for Android
          paddingHorizontal: Platform.OS === 'android' ? 20 : 0 // Horizontal spacing before and after the ScrollView
        }}>
          <View style= {{backgroundColor: 'cyan', height: 200, width: 150}}>
            <Image style={styles.container} source={{uri: 'https://reactjs.org/logo-og.png'}}></Image>
            <Text>Title Category</Text>

            <StarRating
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}/>
            <Text>Movie Name</Text>

            </View>
          {/* <View style= {{backgroundColor: 'red', height: 100, width: 50}}>
            <Text>Card2</Text>
            </View> */}
        </ScrollView>

      </SafeAreaView>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    width: 150
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection:"row",
    backgroundColor:'#fff', 
    borderRadius:20,
    padding:8,
    paddingHorizontal:20, 
    marginHorizontal:10,
    height:35,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  card: {
    // padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardtitle: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width:50,
    height:50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: 5
  },
  signIn: {
      width: '100%',
      padding:5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 3
  },
  textSign: {
      fontSize: 14,
      fontWeight: 'bold'
  }
});


export const data = [
  {
      id: 1,
      category: 'advertisement',
      title: 'Please subscribe to view more exclusive contents.',
      //image: require('../assets/images/localAd-1.jpg'),
  },
  {
      id: 2,
      category: 'advertisement',
      title: '2 months for only Rm15.90 for offline movies.',
      //image: require('../assets/images/localAd-2.jpg'),
  },
  {
      id: 3,
      category: 'SCIENCE FICTION',
      title: 'Blade Runner Future 2049.',
      image: { uri: 'https://i.imgur.com/L68FtMA.jpg' }, rating: 4.0,
  },
  {
      id: 4,
      category: 'SUPERHERO ACTION',
      title: 'Captain America Civil War.',
      image: { uri: 'https://i.imgur.com/tAui2H7.jpg' }, rating: 3.5,
  },
  {
      id: 5,
      category: 'ROMANCE',
      title: 'Beauty and the Beast.',
      image: { uri: 'https://i.imgur.com/J5pgFyr.jpg' }, rating: 2.5,
  },
  {
      id: 6,
      category: 'DRAMA',
      title: 'Shawshank Redemption.',
      image: { uri: 'https://i.imgur.com/7YGXDbM.jpg' }, rating: 3.0,
  },
];
