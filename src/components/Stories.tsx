import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import stories from '../data/stories'

const Stories = () => {
  return (
    <View style={styles.stories}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        {stories.map(story => (
            <View key={story.id} style={styles.story}>
            <View
             style={styles.cover} >
                <Image style={styles.avatar} source={{
                    uri: story.user.avatar
                }}></Image>
                
            </View>
            <Text style={styles.username} numberOfLines={1}>{story.user.name}</Text>
            </View>
        ))}
    </ScrollView>
    </View>

  )
}

export default Stories;

const styles = StyleSheet.create({
    username: {
        fontSize: 12
    },
    stories: {
        paddingVertical: 10,
        borderBottomColor: 'red',
        borderBottomWidth: 0.5
    },
    story: {
        width: 70,
        marginHorizontal: 8
    },
    cover: {
        width: 67,
        height: 67,
        borderRadius: 33,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: '#fff'
    }
})