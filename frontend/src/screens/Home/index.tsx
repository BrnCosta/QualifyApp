import React, { useState } from 'react';
import {
  View, Text, Image, TouchableOpacity,
  ImageBackground, TouchableWithoutFeedback,
  NativeScrollEvent, NativeSyntheticEvent, FlatList,
  ListRenderItem
} from 'react-native';
import { styles } from './styles';
import { COLORS } from '../../utils/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../components/RootParamList';

const Home = (props) => {

  const [gradientOffset, setGradientOffset] = useState(0);
  const navigation = useNavigation<NavigationProp>();

  const onScrollPage = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    let offset = event.nativeEvent.contentOffset.y / 500
    setGradientOffset(offset);
  }

  const highlight: String[] =
    ['Top 250', 'What to watch', 'What to watch', 'What to watch', 'What to watch', 'What to watch'];

  const MovieItem = ({ name }) => {
    return (
      <View style={styles.categoryCards}>
        <View style={styles.category}>
          <View style={styles.categoryBar} />
          <Text style={styles.categoryTitle}>{name}</Text>
        </View>
        <FlatList horizontal data={highlight} renderItem={() => (
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Movie', { movie: 'Thor: Love and Thunder' })}>
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

  const renderItem: ListRenderItem<String> = ({ item }) => <MovieItem name={item} />;

  const MainMovie = () => (
    <View style={styles.mainMovie}>
      <Text style={styles.mainMovieTitle}>Thor: Love and Thunder</Text>
      <View style={styles.mainMovieStars}>
        <MaterialIcons name='star' size={24} color={COLORS.star} />
        <MaterialIcons name='star' size={24} color={COLORS.star} />
        <MaterialIcons name='star' size={24} color={COLORS.star} />
        <MaterialIcons name='star-half' size={24} color={COLORS.star} />
        <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
      </View>

      <View style={styles.mainMovieButtons}>
        <TouchableOpacity
          style={styles.trailerButton}
          onPress={() => navigation.navigate('Movie', { movie: 'Thor: Love and Thunder', trailer: true })}
        >
          <MaterialIcons name="play-circle-filled" size={24} color={COLORS.secondary} />
          <Text style={styles.trailerText}>Watch trailer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.infoButton}
          onPress={() => navigation.navigate('Movie', { movie: 'Thor: Love and Thunder' })}
        >
          <MaterialIcons name="info-outline" size={24} color={COLORS.white} />
          <Text style={styles.infoText}>Info</Text>
        </TouchableOpacity>
      </View>

    </View>
  );

  return (
    <ImageBackground
      style={styles.imageBackground} resizeMode='cover'
      source={{ uri: 'https://pbs.twimg.com/media/FQobPSaXIAMGb1v.jpg:large' }}
    >
      <LinearGradient
        colors={['transparent', COLORS.secondary]}
        locations={[0, 0.55 - gradientOffset]}
        style={{ flex: 1 }}>
        <View style={styles.container}>

          <Header {...props} />
          <FlatList data={highlight} renderItem={renderItem} ListHeaderComponent={MainMovie} onScroll={onScrollPage} />

        </View>
      </LinearGradient>
    </ImageBackground>
  )
}

export default Home;