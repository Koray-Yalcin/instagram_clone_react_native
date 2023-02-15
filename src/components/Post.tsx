import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Bookmark, Comment, Heart, Message, More } from '../../icons'
import FitImage from './FitImage'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';

const Post = ({post}: any) => {

    dayjs.extend(relativeTime)
  return (
    <View style={styles.post}>
        <View style={styles.header}>
            <View style={styles.username}>
                <Image style={styles.avatar} source={{
                uri: post.user.avatar
                }}/>
                <Text style={styles.title}>{post.user.name}</Text>
            </View>
            <TouchableOpacity>
                <More size={30}/>
            </TouchableOpacity>
        </View>
        <FitImage src= {post.medias[0].src}></FitImage>
            <View style={styles.content}>
            <View style={styles.actions}>
            <View style={styles.leftActions}>
                <TouchableOpacity style={styles.action} activeOpacity={0.7}>
                    <Heart size={24}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action} activeOpacity={0.7}>
                    <Comment size={24} fill={'#222'}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action} activeOpacity={0.7}>
                    <Message size={24} fill={'#222'}/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Bookmark size={24} fill={'#222'}/>
            </TouchableOpacity>
        </View>
            </View>
        <View>
            <Text style={styles.likes}>{post.likes} Likes</Text>
        </View>
        <View>
            <Text>
                <Text style={styles.user}>{post.user.name}</Text>
                {' '}
                {post.description}
            </Text>
        </View>
        <TouchableOpacity style={{paddingVertical: 7}} activeOpacity={0.7} >
            <Text style={styles.comments}>View all {post.comments} comments</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.date}>{dayjs(post.date).fromNow()}</Text>
            <Text style={styles.translation}>See Translation</Text>
        </View>
    </View>
  )
}

export default Post;

const styles = StyleSheet.create({
    post: {
        marginBottom: 30
    },
    translation: {
        fontSize: 13,
        fontWeight: '600',
        marginLeft: 10
    },
    date: {
        fontSize: 13,
        opacity: 0.5
    },
    comments: {
        opacity: 0.5,
        fontWeight: '500'
    },
    user: {
        fontWeight: '600',
        marginRight: 10
    },
    content: {
        paddingHorizontal: 14
    },
    likes: {
        fontWeight: 'bold'
    },
    action: {
        marginRight: 10
    },
    leftActions: {
        flexDirection: 'row'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
    },
    username: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 49,
        paddingHorizontal: 10
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30,
        marginRight: 10
    },
    title: {
        fontSize: 14,
        fontWeight: '600'
    }
})