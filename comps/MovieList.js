import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import MovieModal from './MovieModal';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/list/5?api_key=d4bc3c640586e7f90dc68d8b300247ff&language=en-US');
      setMovies(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedMovie(null);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => openModal(item)} style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.year}>Release Year: {item.release_date.split('-')[0]}</Text>
      <Text style={styles.rating}>Rating: {item.vote_average}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <MovieModal
        isVisible={isModalVisible}
        movie={selectedMovie}
        onClose={closeModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  year: {
    fontSize: 16,
  },
  rating: {
    fontSize: 16,
  },
});

export default MovieList;
