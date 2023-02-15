import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
import HomeScreen from './src/views/Home';
import ProfileScreen from './src/views/Profile';
import ReelScreen from './src/views/Reel';
import SearchScreen from './src/views/Search';
import ShopScreen from './src/views/Shop';
import {Home, HomeFilled, Search, SearchFilled, Reel, ReelFilled, Shop, ShopFilled} from './icons'

const Tab = createBottomTabNavigator();

function Screens() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      headerShown: false
    }}>
      <Tab.Screen name="home" component={HomeScreen} options={{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#262626',
        tabBarIcon: ({focused, color, size }) => {
          if (focused) {return <HomeFilled size={size}/>}
          return <Home size={size} fill={color}/>
        }
      }} />
      <Tab.Screen name="search" component={SearchScreen} options={{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#262626',
        tabBarIcon: ({focused, color, size }) => {
          if (focused) {return <SearchFilled size={size}/>}
          return <Search size={size} fill={color}/>
        }
      }} />
      <Tab.Screen name="reel" component={ReelScreen} options={{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#262626',
        tabBarIcon: ({focused, color, size }) => {
          if (focused) {return <ReelFilled size={size} fill={color}/>}
          return <Reel size={size} fill={'white'}/>
        }
      }} />
      <Tab.Screen name="shop" component={ShopScreen} options={{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#262626',
        tabBarIcon: ({focused, color, size }) => {
          if (focused) {return <Shop size={size} fill={color}/>}
          return <ShopFilled size={size} fill={color}/>
        }
      }} />
      <Tab.Screen name="profile" component={ProfileScreen} options={{
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#262626',
          tabBarIcon: ({focused, color}) => {
              return <Image
                  style={{
                      ...styles.avatar,
                      borderWidth: focused ? 2 : 0
                  }}
                  source={{
                      uri: 'https://whatsondisneyplus.com/wp-content/uploads/2022/12/spiderman.png',
                  }}
              />
          }
      }} />
    </Tab.Navigator>
  );
}

export default Screens;

const styles = StyleSheet.create({
  avatar: {
      width: 24,
      height: 24,
      borderRadius: 24,
      borderColor: 'red'
  }
})