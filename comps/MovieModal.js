import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, Image } from 'react-native';

const MovieModal = ({ isVisible, movie, onClose }) => {
  if (!movie) return null;

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{movie.title}</Text>
          <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} style={styles.image} />
          <Text style={styles.plot}>{movie.overview}</Text>
          <Text style={styles.rating}>Rating: {movie.vote_average}</Text>
          <Text style={styles.votes}>Votes: {movie.vote_count}</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 300,
    marginVertical: 10,
  },
  plot: {
    fontSize: 16,
    marginVertical: 10,
  },
  rating: {
    fontSize: 16,
    marginVertical: 5,
  },
  votes: {
    fontSize: 16,
    marginVertical: 5,
  },
  closeButton: {
    marginTop: 20,
    alignSelf: 'center',
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default MovieModal;
