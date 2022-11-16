import React, { useEffect, useState } from 'react'
import { Text, View, FlatList, ListRenderItem, Image, TouchableWithoutFeedback } from 'react-native'
import Header from '../../components/Header'
import { styles } from './styles'
import * as Data from '../../utils/Data/Categories'
import { Category } from '../../utils/Interface/Category'
import { base_url } from '../../utils/Data/Constants'
import { IMovie } from '../../utils/Interface/IMovie'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from '../../components/RootParamList'

const CategoryItem = ({ name }) => {

  type JSONResponse = {
    data?: {
      result: IMovie[],
    }
  }

  const [movieCategory, setMovieCategory] = useState<IMovie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let url = base_url + 'getMovieByCategory?category=' + name;
      const result = await fetch(url);

      const { data }: JSONResponse = await result.json();

      setMovieCategory(data.result);
    }

    fetchData();

  }, []);

  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryName}>{name}</Text>
      <FlatList horizontal data={movieCategory} renderItem={renderItem} />
    </View>
  )
};

const renderItem: ListRenderItem<IMovie> = ({ item }) => <MovieItem movie={item} />;

const MovieItem = ({ movie }) => {

  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Movie', { movie })}>
      <View style={styles.categoryImage}>
        <Image
          source={{
            uri: movie.image,
            width: 100,
            height: 140,
          }}
          style={{ borderRadius: 10 }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const Categories = (props) => {

  const renderItem: ListRenderItem<Category> = ({ item }) => <CategoryItem name={item.name} />;

  return (
    <View style={styles.container}>
      <Header {...props} />
      <FlatList data={Data.categories} renderItem={renderItem} />
    </View>
  )
}

export default Categories;