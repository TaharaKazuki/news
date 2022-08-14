import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({})

type Props = {
  imageUrl: string
  title: string
  author: string
  onPress: () => void
}

export const ListItem = ({ imageUrl, title, author, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>{!!imageUrl && <Image source={{ uri: imageUrl }} />}</View>
      <View>
        <Text numberOfLines={3}>{title}</Text>
        <Text>{author}</Text>
      </View>
    </TouchableOpacity>
  )
}
