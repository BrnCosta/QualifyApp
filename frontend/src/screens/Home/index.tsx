import React, { useState, useEffect } from 'react';
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
import { base_url } from '../../utils/Data/Constants';
import { IMovie } from '../../utils/Interface/IMovie';
import { ScrollView } from 'react-native-gesture-handler';
import { MainMovie } from '../../utils/Data/MainMovie';

const Home = (props) => {

  const [gradientOffset, setGradientOffset] = useState(0);
  const navigation = useNavigation<NavigationProp>();

  const onScrollPage = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    let offset = event.nativeEvent.contentOffset.y / 500
    setGradientOffset(offset);
  }

  const [top100, setTop100] = useState([]);
  const [watchWatch, setWatchWatch] = useState([]);
  const [editorPicks, setEditorPicks] = useState([]);
  const [topPicks, setTopPicks] = useState([]);

  type JSONResponse = {
    data?: {
      result: IMovie[],
    }
  }

  const [mainMovieData] = useState(MainMovie);

  useEffect(() => {
    const fetchTop100 = async () => {
      let url = base_url + 'getTop100';
      const response = await fetch(url, {
        method: 'GET'
      })

      const { data }: JSONResponse = await response.json();

      setTop100(data.result);
    }

    const fetchWhatWatch = async () => {
      let url = base_url + 'getWhatWatch';
      const response = await fetch(url, {
        method: 'GET'
      })

      const { data }: JSONResponse = await response.json();

      setWatchWatch(data.result);
    }

    const fetchEditorPicks = async () => {
      let url = base_url + 'getEditorPicks';
      const response = await fetch(url, {
        method: 'GET'
      })

      const { data }: JSONResponse = await response.json();

      setEditorPicks(data.result);
    }

    const fetchTopPicks = async () => {
      let url = base_url + 'getTopPicks';
      const response = await fetch(url, {
        method: 'GET'
      })

      const { data }: JSONResponse = await response.json();

      setTopPicks(data.result);
    }

    fetchTop100().catch(console.error);
    fetchWhatWatch().catch(console.error);
    fetchEditorPicks().catch(console.error);
    fetchTopPicks().catch(console.error);
  }, []);

  const MovieItem = ({ movie, image }) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Movie', { movie })}>
        <View style={styles.categoryImage}>
          <Image
            source={{ uri: image }}
            style={{ borderRadius: 10, height: 98, width: 67 }}
            resizeMode='cover'
          />
        </View>
      </TouchableWithoutFeedback>
    )
  };

  const renderItem: ListRenderItem<IMovie> = ({ item }) => <MovieItem image={item.image} movie={item} />;

  return (
    <ImageBackground
      style={styles.imageBackground} resizeMode='cover'
      source={{ uri: mainMovieData.image }}
    >
      <LinearGradient
        colors={['transparent', COLORS.secondary]}
        locations={[0, 0.55 - gradientOffset]}
        style={{ flex: 1 }}>
        <View style={styles.container}>

          <Header {...props} />

          <ScrollView onScroll={onScrollPage}>

            <View style={styles.mainMovie}>
              <Text style={styles.mainMovieTitle}>{mainMovieData.title}</Text>
              {
                mainMovieData?.imdb_rating == 10 ? (
                  <View style={styles.mainMovieStars}>
                    <MaterialIcons name='star' size={24} color={COLORS.star} />
                    <MaterialIcons name='star' size={24} color={COLORS.star} />
                    <MaterialIcons name='star' size={24} color={COLORS.star} />
                    <MaterialIcons name='star' size={24} color={COLORS.star} />
                    <MaterialIcons name='star' size={24} color={COLORS.star} />
                  </View>
                ) :
                  mainMovieData?.imdb_rating >= 9 ? (
                    <View style={styles.mainMovieStars}>
                      <MaterialIcons name='star' size={24} color={COLORS.star} />
                      <MaterialIcons name='star' size={24} color={COLORS.star} />
                      <MaterialIcons name='star' size={24} color={COLORS.star} />
                      <MaterialIcons name='star' size={24} color={COLORS.star} />
                      <MaterialIcons name='star-half' size={24} color={COLORS.star} />
                    </View>
                  ) :
                    mainMovieData?.imdb_rating >= 8 ? (
                      <View style={styles.mainMovieStars}>
                        <MaterialIcons name='star' size={24} color={COLORS.star} />
                        <MaterialIcons name='star' size={24} color={COLORS.star} />
                        <MaterialIcons name='star' size={24} color={COLORS.star} />
                        <MaterialIcons name='star' size={24} color={COLORS.star} />
                        <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                      </View>
                    ) :
                      mainMovieData?.imdb_rating >= 7 ? (
                        <View style={styles.mainMovieStars}>
                          <MaterialIcons name='star' size={24} color={COLORS.star} />
                          <MaterialIcons name='star' size={24} color={COLORS.star} />
                          <MaterialIcons name='star' size={24} color={COLORS.star} />
                          <MaterialIcons name='star-half' size={24} color={COLORS.star} />
                          <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                        </View>
                      ) :
                        mainMovieData?.imdb_rating >= 6 ? (
                          <View style={styles.mainMovieStars}>
                            <MaterialIcons name='star' size={24} color={COLORS.star} />
                            <MaterialIcons name='star' size={24} color={COLORS.star} />
                            <MaterialIcons name='star' size={24} color={COLORS.star} />
                            <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                            <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                          </View>
                        ) :
                          mainMovieData?.imdb_rating >= 5 ? (
                            <View style={styles.mainMovieStars}>
                              <MaterialIcons name='star' size={24} color={COLORS.star} />
                              <MaterialIcons name='star' size={24} color={COLORS.star} />
                              <MaterialIcons name='star-half' size={24} color={COLORS.star} />
                              <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                              <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                            </View>
                          ) :
                            mainMovieData?.imdb_rating >= 4 ? (
                              <View style={styles.mainMovieStars}>
                                <MaterialIcons name='star' size={24} color={COLORS.star} />
                                <MaterialIcons name='star' size={24} color={COLORS.star} />
                                <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                              </View>
                            ) :
                              mainMovieData?.imdb_rating >= 3 ? (
                                <View style={styles.mainMovieStars}>
                                  <MaterialIcons name='star' size={24} color={COLORS.star} />
                                  <MaterialIcons name='star-half' size={24} color={COLORS.star} />
                                  <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                  <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                  <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                </View>
                              ) :
                                mainMovieData?.imdb_rating >= 2 ? (
                                  <View style={styles.mainMovieStars}>
                                    <MaterialIcons name='star' size={24} color={COLORS.star} />
                                    <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                    <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                    <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                    <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                  </View>
                                ) :
                                  mainMovieData?.imdb_rating >= 1 ? (
                                    <View style={styles.mainMovieStars}>
                                      <MaterialIcons name='star-half' size={24} color={COLORS.star} />
                                      <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                      <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                      <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                      <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                    </View>
                                  ) :
                                    (<View style={styles.mainMovieStars}>
                                      <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                      <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                      <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                      <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                      <MaterialIcons name='star-outline' size={24} color={COLORS.star} />
                                    </View>)
              }

              <View style={styles.mainMovieButtons}>
                <TouchableOpacity
                  style={styles.trailerButton}
                  onPress={() => navigation.navigate('Movie', { movie: mainMovieData })}
                >
                  <MaterialIcons name="play-circle-filled" size={24} color={COLORS.secondary} />
                  <Text style={styles.trailerText}>Watch trailer</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.infoButton}
                  onPress={() => navigation.navigate('Movie', { movie: mainMovieData })}
                >
                  <MaterialIcons name="info-outline" size={24} color={COLORS.white} />
                  <Text style={styles.infoText}>Info</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.categoryCards}>
              <View style={styles.category}>
                <View style={styles.categoryBar} />
                <Text style={styles.categoryTitle}>Top 100</Text>
              </View>
              <FlatList horizontal data={top100} renderItem={renderItem} />
            </View>

            <View style={styles.categoryCards}>
              <View style={styles.category}>
                <View style={styles.categoryBar} />
                <Text style={styles.categoryTitle}>What to watch</Text>
              </View>
              <FlatList horizontal data={watchWatch} renderItem={renderItem} />
            </View>

            <View style={styles.categoryCards}>
              <View style={styles.category}>
                <View style={styles.categoryBar} />
                <Text style={styles.categoryTitle}>Editor's picks</Text>
              </View>
              <FlatList horizontal data={editorPicks} renderItem={renderItem} />
            </View>

            <View style={styles.categoryCards}>
              <View style={styles.category}>
                <View style={styles.categoryBar} />
                <Text style={styles.categoryTitle}>Top picks</Text>
              </View>
              <FlatList horizontal data={topPicks} renderItem={renderItem} />
            </View>

          </ScrollView>
        </View>
      </LinearGradient>
    </ImageBackground>
  )
}

export default Home;