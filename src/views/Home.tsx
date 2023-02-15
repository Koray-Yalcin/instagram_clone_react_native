import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Stories from '../components/Stories'
import posts from '../data/post';
import Post from '../components/Post';

const Home = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]} style={styles.container}>
      <Header/>
      <Stories/>
      {posts.map(post => <Post key={post.id} post={post}></Post>)}
    </ScrollView>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})