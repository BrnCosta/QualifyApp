import React from 'react'
import { Text, View, FlatList, ListRenderItem, Image, TouchableWithoutFeedback } from 'react-native'
import Header from '../../components/Header'
import { styles } from './styles'
import * as Data from '../../utils/Data/Categories'
import { Category } from '../../utils/Interface/Category'

const MovieItem = ({ name }) => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryName}>{name}</Text>
      <FlatList horizontal data={Data.Categories} renderItem={() => (
        <TouchableWithoutFeedback onPress={() => alert('Thor')}>
          <View style={styles.categoryImage}>
            <Image
              source={{
                uri: 'https://posters.movieposterdb.com/11_03/2011/800369/l_800369_4d7c5af3.jpg',
                width: 100,
                height: 140,
              }}
              style={{ borderRadius: 10 }}
            />
          </View>
        </TouchableWithoutFeedback>
      )} />
    </View>
  )
};

const Categories = (props) => {

  const renderItem: ListRenderItem<Category> = ({ item }) => <MovieItem name={item.Name} />;

  return (
    <View style={styles.container}>
      <Header {...props} />
      <FlatList data={Data.Categories} renderItem={renderItem} />
    </View>
  )
}

export default Categories;