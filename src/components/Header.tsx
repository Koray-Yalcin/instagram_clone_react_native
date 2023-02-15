import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Logo, Plus, Heart, Chat } from '../../icons';

const Header = () => {
  return (
    <View style={styles.header}>
      <Logo size={104} fill={'red'}></Logo>
      <View style={styles.action}>
        <TouchableOpacity activeOpacity={0.6} >
            <Plus size={24} fill={'white'} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.button}>
            <Heart size={24} />
            <View style={styles.notificationContent}>
                        <View style={styles.notification}/>
                    </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.button} >
            <Chat size={24} fill={'white'} />
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  notification: {
    width: 8,
    height: 8,
    backgroundColor: '#FF3450',
    borderRadius: 100
},
notificationContent: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: '#fff',
    padding: 1.5
},
    header: {
        height: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    action: {
        flexDirection: 'row',
    },
    button: {
        marginLeft: 20
    }
});